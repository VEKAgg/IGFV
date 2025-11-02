# IGFV Website - Setup Guide

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env.local` in the project root:

```env
INARA_API_KEY=your_inara_api_key_here
```

### 3. Get Your Inara API Key

1. Go to [Inara.cz](https://inara.cz)
2. Create an account (or log in)
3. Visit [Settings → API Keys](https://inara.cz/settings-api/)
4. Click "Add API Key"
   - **Name**: `IGFV Website`
   - **Permissions**: Check all read permissions
5. Copy your API key
6. Paste into `.env.local` as `INARA_API_KEY=...`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Using Inara API Data

### Available Inara Integration Functions

The website includes ready-to-use functions for fetching Inara data. Located in `src/lib/inara.ts`:

```typescript
// Fetch squadron data
import { fetchSquadronData } from '@/lib/inara';

const squadData = await fetchSquadronData(9569); // Squadron ID
```

### Example: Fetching Squadron Stats

In a server component:

```tsx
import { fetchSquadronData } from '@/lib/inara';

export default async function StatsWidget() {
  const squadData = await fetchSquadronData(9569);
  
  if (!squadData) {
    return <div>Unable to load squad data</div>;
  }
  
  return (
    <div>
      <p>Members: {squadData.squadronMembers}</p>
      <p>Power: {squadData.squadronPower}</p>
    </div>
  );
}
```

### Example: Fetching Fleet Carrier Data

```tsx
import { fetchFleetCarrierData } from '@/lib/inara';

export default async function CarrierWidget() {
  const carrierData = await fetchFleetCarrierData(3700001234);
  
  if (!carrierData) {
    return <div>Unable to load carrier data</div>;
  }
  
  return (
    <div>
      <p>System: {carrierData.currentStarSystem}</p>
      <p>Name: {carrierData.carrierName}</p>
    </div>
  );
}
```

### Example: Fetching Commander Profile

```tsx
import { fetchCommanderProfile } from '@/lib/inara';

export default async function CommanderCard() {
  const profile = await fetchCommanderProfile('Skalfinn');
  
  if (!profile) {
    return <div>Unable to load profile</div>;
  }
  
  return (
    <div>
      <p>CMDR: {profile.commanderName}</p>
      <p>Credits: {profile.credits?.toLocaleString()}</p>
    </div>
  );
}
```

---

## Where to Add Inara Data

### Currently Mock Data:

These pages use hardcoded data but can easily be converted to Inara:

- **Fleet Carrier Page** (`src/app/fleet-carrier/page.tsx`)
  - Line 20-25: `const carrier = { ... }`
  - Can be replaced with: `const carrier = await fetchFleetCarrierData(3700001234);`

- **Operations Page** (`src/app/operations/page.tsx`)
  - Line 12-90: `const operations = [ ... ]`
  - Can be replaced with BGS data from Inara

- **Members Page** (`src/app/members/page.tsx`)
  - Line 10-35: `const leaders = [ ... ]`
  - Can show real member data from squadron

- **Squadron Stats** (Homepage, line 520+)
  - Shows mock stats (100+ members, etc.)
  - Can fetch real data from squadron API

### How to Convert a Page to Use Inara

1. **Import the function**:
   ```tsx
   import { fetchSquadronData } from '@/lib/inara';
   ```

2. **Make the component async**:
   ```tsx
   export default async function FleetCarrierPage() {
     const carrier = await fetchFleetCarrierData(3700001234);
   ```

3. **Handle missing data**:
   ```tsx
   if (!carrier) {
     return <div>Loading carrier data...</div>;
   }
   ```

4. **Use the data**:
   ```tsx
   <h1>{carrier.carrierName}</h1>
   <p>{carrier.currentStarSystem}</p>
   ```

---

## API Security

### Why Server-Side Proxy?

The Inara API key is **never** exposed to the client:

1. API key stored in `INARA_API_KEY` environment variable
2. Server proxy at `/api/inara/proxy` injects key server-side
3. Client only sees responses, never the key itself

### Protected Flow:

```
Client (Browser)
    ↓
Send Request
    ↓
/api/inara/proxy (Server)
    ↓
Add API Key
    ↓
Inara API
    ↓
Response back to Client
```

---

## Troubleshooting

### "INARA_API_KEY not configured"

1. Check `.env.local` exists in project root
2. Verify `INARA_API_KEY=...` is set correctly
3. Restart dev server: `npm run dev`

### "Failed to fetch from Inara"

1. Verify API key is correct
2. Check Inara API status
3. Verify internet connection
4. Try fetching directly from Inara: [https://inara.cz/inapi/v1/](https://inara.cz/inapi/v1/)

### "No data returned"

1. Check squadron ID is correct (IGFV = 9569)
2. Verify Inara has data for that ID
3. Check API response status in browser DevTools

---

## Performance

### Caching

Data is cached with `Next.js cache()` to avoid repeated API calls:

```typescript
export const fetchSquadronData = cache(async (squadronId) => {
  // Only called once per server render
  // Cached for entire request
});
```

### Manual Cache Invalidation

To force a fresh API call, restart the dev server:

```bash
npm run dev
```

---

## Next Steps

1. ✅ Set up Inara API key
2. ✅ Test with `npm run dev`
3. ⏳ Convert Fleet Carrier page to live data
4. ⏳ Convert Operations page to live BGS data
5. ⏳ Convert Members page to show real squad roster

---

## Support

- **Inara API Docs**: [https://inara.cz/inapi/v1/](https://inara.cz/inapi/v1/)
- **Discord**: [https://discord.gg/igfv](https://discord.gg/igfv)
- **Issues**: Check GitHub issues for help
