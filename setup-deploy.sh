#!/bin/bash

# IGFV Self-Hosting Quick Start Script
# This script helps with initial setup and deployment

set -e

COLOR_RESET='\033[0m'
COLOR_GREEN='\033[0;32m'
COLOR_BLUE='\033[0;34m'
COLOR_YELLOW='\033[1;33m'
COLOR_RED='\033[0;31m'

print_header() {
    echo -e "${COLOR_BLUE}=== $1 ===${COLOR_RESET}"
}

print_success() {
    echo -e "${COLOR_GREEN}✓ $1${COLOR_RESET}"
}

print_warning() {
    echo -e "${COLOR_YELLOW}⚠ $1${COLOR_RESET}"
}

print_error() {
    echo -e "${COLOR_RED}✗ $1${COLOR_RESET}"
}

# Check prerequisites
check_prerequisites() {
    print_header "Checking Prerequisites"
    
    local missing_tools=()
    
    if ! command -v docker &> /dev/null; then
        missing_tools+=("docker")
    else
        print_success "Docker is installed"
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        missing_tools+=("docker-compose")
    else
        print_success "Docker Compose is installed"
    fi
    
    if ! command -v git &> /dev/null; then
        missing_tools+=("git")
    else
        print_success "Git is installed"
    fi
    
    if ! command -v node &> /dev/null; then
        missing_tools+=("node")
    else
        print_success "Node.js is installed"
    fi
    
    if [ ${#missing_tools[@]} -ne 0 ]; then
        print_error "Missing tools: ${missing_tools[@]}"
        echo "Please install them before continuing."
        exit 1
    fi
}

# Setup local environment
setup_local() {
    print_header "Setting Up Local Environment"
    
    if [ ! -f ".env.local" ]; then
        print_warning "Creating .env.local from template..."
        cp .env.example .env.local
        print_success ".env.local created"
        print_warning "Please edit .env.local with your settings"
    else
        print_success ".env.local already exists"
    fi
}

# Install dependencies
install_deps() {
    print_header "Installing Dependencies"
    
    if [ ! -d "node_modules" ]; then
        npm ci
        print_success "Dependencies installed"
    else
        print_success "Dependencies already installed"
    fi
}

# Test build locally
test_build() {
    print_header "Testing Local Build"
    
    npm run lint || {
        print_error "Linting failed"
        return 1
    }
    print_success "Linting passed"
    
    npm run build || {
        print_error "Build failed"
        return 1
    }
    print_success "Build successful"
}

# Build Docker image
build_docker() {
    print_header "Building Docker Image"
    
    docker build -t igfv:latest . || {
        print_error "Docker build failed"
        return 1
    }
    print_success "Docker image built successfully"
}

# Test Docker container
test_docker() {
    print_header "Testing Docker Container"
    
    docker-compose up -d
    print_success "Container started"
    
    sleep 3
    
    if curl -s http://localhost:3001 > /dev/null; then
        print_success "Container is responding"
    else
        print_error "Container not responding"
        docker-compose logs igfv-web
        docker-compose down
        return 1
    fi
    
    docker-compose down
    print_success "Container test passed"
}

# Setup GitHub Secrets
setup_github_secrets() {
    print_header "GitHub Secrets Setup"
    
    echo "To enable CI/CD, add these secrets to your GitHub repository:"
    echo "  Settings → Secrets and variables → Actions"
    echo ""
    echo "Required secrets:"
    echo "  DEPLOY_HOST        = your.server.ip"
    echo "  DEPLOY_USER        = deploy_user"
    echo "  DEPLOY_SSH_KEY     = (private SSH key)"
    echo "  DEPLOY_PORT        = 22"
    echo ""
    echo "To generate SSH key:"
    echo "  ssh-keygen -t rsa -b 4096 -f deploy_key -N \"\""
    echo ""
}

# Main menu
main_menu() {
    print_header "IGFV Self-Hosting Setup"
    
    echo "Select an option:"
    echo "1) Run all checks and tests (recommended first time)"
    echo "2) Check prerequisites only"
    echo "3) Setup local environment"
    echo "4) Install dependencies"
    echo "5) Test local build"
    echo "6) Build Docker image"
    echo "7) Test Docker container"
    echo "8) Show GitHub Secrets setup"
    echo "9) Exit"
    echo ""
    read -p "Enter your choice (1-9): " choice
    
    case $choice in
        1)
            check_prerequisites
            setup_local
            install_deps
            test_build
            build_docker
            test_docker
            setup_github_secrets
            print_success "All checks passed! Ready for deployment."
            ;;
        2)
            check_prerequisites
            ;;
        3)
            setup_local
            ;;
        4)
            install_deps
            ;;
        5)
            test_build
            ;;
        6)
            build_docker
            ;;
        7)
            test_docker
            ;;
        8)
            setup_github_secrets
            ;;
        9)
            echo "Exiting..."
            exit 0
            ;;
        *)
            print_error "Invalid option"
            main_menu
            ;;
    esac
}

# Run if script is executed directly
if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
    main_menu
fi
