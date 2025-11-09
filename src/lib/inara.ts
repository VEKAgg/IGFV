import { cache } from 'react';

const INARA_ENDPOINT = '/api/inara/proxy';

interface InaraResponse {
  header: {
    appName: string;
    appVersion: string;
    requestTimestamp: string;
    resultStatus: string;
  };
  events: Array<{
    eventStatus: string;
    eventData?: Record<string, unknown>;
  }>;
}

// Cache squadron data for 1 hour to reduce API calls
export const fetchSquadronData = cache(async (squadronId: number) => {
  if (!squadronId) {
    console.warn('Squadron ID not provided');
    return null;
  }

  try {
    const response = await fetch(INARA_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        header: {
          appName: 'IGFV-Website',
          appVersion: '1.0',
        },
        events: [
          {
            eventName: 'getSquadron',
            eventTimestamp: new Date().toISOString(),
            eventData: { squadronID: squadronId },
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error('Inara API error:', response.status);
      return null;
    }

    const data: InaraResponse = await response.json();

    if (data.header.resultStatus === 'OK' && data.events[0]?.eventData) {
      return data.events[0].eventData;
    }

    return null;
  } catch (error) {
    console.error('Failed to fetch squadron data from Inara:', error);
    return null;
  }
});

// Fetch fleet carrier details
export const fetchFleetCarrierData = cache(async (carrierId: number) => {
  if (!carrierId) {
    console.warn('Carrier ID not provided');
    return null;
  }

  try {
    const response = await fetch(INARA_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        header: {
          appName: 'IGFV-Website',
          appVersion: '1.0',
        },
        events: [
          {
            eventName: 'getFleetCarrier',
            eventTimestamp: new Date().toISOString(),
            eventData: { carrierID: carrierId },
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error('Inara API error:', response.status);
      return null;
    }

    const data: InaraResponse = await response.json();

    if (data.header.resultStatus === 'OK' && data.events[0]?.eventData) {
      return data.events[0].eventData;
    }

    return null;
  } catch (error) {
    console.error('Failed to fetch fleet carrier data from Inara:', error);
    return null;
  }
});

// Fetch commander profile
export const fetchCommanderProfile = cache(async (commanderName: string) => {
  if (!commanderName) {
    console.warn('Commander name not provided');
    return null;
  }

  try {
    const response = await fetch(INARA_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        header: {
          appName: 'IGFV-Website',
          appVersion: '1.0',
        },
        events: [
          {
            eventName: 'getCommanderProfile',
            eventTimestamp: new Date().toISOString(),
            eventData: { commanderName },
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error('Inara API error:', response.status);
      return null;
    }

    const data: InaraResponse = await response.json();

    if (data.header.resultStatus === 'OK' && data.events[0]?.eventData) {
      return data.events[0].eventData;
    }

    return null;
  } catch (error) {
    console.error('Failed to fetch commander profile from Inara:', error);
    return null;
  }
});
