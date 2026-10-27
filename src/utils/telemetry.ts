interface TelemetryEvent {
  eventName: string;
  timestamp: string;
  metadata?: Record<string, string | number | boolean>;
}

class LocalTelemetry {
  private enabled: boolean = false;
  private events: TelemetryEvent[] = [];

  constructor() {
    // Default telemetry strictly OFF per prompt requirements
    this.enabled = false;
  }

  public enable(): void {
    this.enabled = true;
    console.info("[Telemetry] Local diagnostic telemetry enabled (Console only, no external servers).");
  }

  public disable(): void {
    this.enabled = false;
  }

  public track(eventName: string, metadata?: Record<string, string | number | boolean>): void {
    if (!this.enabled) return;

    // Sanitize metadata to guarantee no PII is ever logged
    const sanitizedMetadata: Record<string, string | number | boolean> = {};
    if (metadata) {
      for (const [key, val] of Object.entries(metadata)) {
        if (!['name', 'email', 'phone', 'message', 'address'].includes(key.toLowerCase())) {
          sanitizedMetadata[key] = val;
        }
      }
    }

    const event: TelemetryEvent = {
      eventName,
      timestamp: new Date().toISOString(),
      metadata: sanitizedMetadata,
    };

    this.events.push(event);
    if (typeof window !== 'undefined' && (window as unknown as { __DEV__?: boolean }).__DEV__) {
      console.log(`[Telemetry Event: ${eventName}]`, sanitizedMetadata);
    }
  }

  public getEvents(): TelemetryEvent[] {
    return [...this.events];
  }
}

export const telemetry = new LocalTelemetry();
