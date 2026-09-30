export default function Imprint() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="mb-10 text-4xl font-semibold">Imprint</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-muted-foreground text-lg">
              Email:
              <a href="mailto:hello@ctrlpad.xyz"> hello@ctrlpad.xyz</a>
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Disclaimer</h2>
            <p className="text-muted-foreground text-lg">
              This is a non-commercial open-source project.
              All software (desktop application, daemon, and firmware),
              hardware schematics, and flashing tools are provided &quot;as is&quot;,
              without warranty of any kind, express or implied.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Hardware Flashing Notice</h2>
            <p className="text-muted-foreground text-lg">
              Flashing firmware onto ESP32 devices, wiring custom components,
              or modifying hardware carries inherent risks,
              including the risk of bricking microcontrollers, permanent hardware damage, or data loss.
              Any flashing, installation, or hardware modifications are performed entirely at your own risk.
              The author assumes no responsibility or liability for damages, system instability,
              or loss of hardware resulting from the use of this project.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Liability for Content</h2>
            <p className="text-muted-foreground text-lg">
              The contents of this website have been created with the utmost care.
              However, I cannot guarantee the accuracy, completeness, or timeliness of the content.
              As a service provider, I am responsible for my own content on these pages according to general laws.
              However, I am not obligated to monitor transmitted or stored third-party information or
              to investigate circumstances that indicate illegal activity.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Liability for Links</h2>
            <p className="text-muted-foreground text-lg">
              This website contains links to external third-party websites over
              whose content I have no influence. Therefore, I cannot assume any liability
              for this external content. The respective provider or operator of the linked pages
              is always responsible for the content of the linked pages.
              The linked pages were checked for possible legal violations at the time of linking.
              Illegal content was not recognizable at the time of linking.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
