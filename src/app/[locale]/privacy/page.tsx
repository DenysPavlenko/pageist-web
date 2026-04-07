import { Header, Typography } from "@/src/components/ui";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Typography variant="h1" className="text-center mb-6">
          Privacy Policy
        </Typography>

        <Typography
          variant="body2"
          className="text-center text-secondary mb-12"
        >
          Last updated: April 7, 2026
        </Typography>

        <div className="space-y-8">
          <div>
            <Typography variant="body1" className="mb-6">
              Pageist is a personal reading tracker that helps you log your
              pages, track progress, and build a daily reading habit. Your
              privacy and data security are our top priorities.
            </Typography>
            <hr className="border-outline my-8" />
          </div>

          <section>
            <Typography variant="h3" className="mb-4">
              1. Information We Collect
            </Typography>
            <Typography variant="body1" className="mb-4">
              Pageist collects only the data necessary to provide the core
              features of the App.
            </Typography>

            <div className="mb-6">
              <Typography variant="h5" className="mb-3">
                1.1 Data You Provide
              </Typography>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                <li>Books added to your library</li>
                <li>Page logs and reading progress</li>
                <li>Daily reading goals</li>
                <li>Exported backup data (if you choose to export)</li>
              </ul>
            </div>

            <div className="mb-6">
              <Typography variant="h5" className="mb-3">
                1.2 Automatically Collected Data
              </Typography>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                <li>
                  Crash and app performance data (via Expo/Google Play, if
                  enabled)
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="body1" className="mb-2 font-semibold">
                We do not collect:
              </Typography>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                <li>
                  Personal identity information (name, email, phone number)
                </li>
                <li>Location data</li>
                <li>Photos, contacts, or any device files</li>
                <li>Sensitive financial information</li>
              </ul>
            </div>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              2. How We Use Your Data
            </Typography>
            <Typography variant="body1" className="mb-4">
              We use your data only for the following purposes:
            </Typography>

            <div className="mb-6">
              <Typography variant="h5" className="mb-3">
                2.1 App Functionality
              </Typography>
              <Typography variant="body1" className="mb-3">
                To provide core features such as:
              </Typography>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                <li>Logging books and pages</li>
                <li>Tracking daily reading goals and streaks</li>
                <li>Displaying charts, heatmaps, and reading insights</li>
                <li>Restoring data from backups</li>
              </ul>
            </div>

            <div>
              <Typography variant="h5" className="mb-3">
                2.2 Analytics (optional)
              </Typography>
              <Typography variant="body1">
                Anonymous crash/performance analytics and app usage analytics
                (via Mixpanel) may be collected to improve stability, usability,
                and performance. No personal content or logs are ever included.
              </Typography>
            </div>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              3. Data Storage & Security
            </Typography>
            <div className="space-y-4">
              <Typography variant="body1">
                All your reading logs, page counts, and books are stored locally
                on your device unless you explicitly choose to export them.
              </Typography>
              <Typography variant="body1">
                Data is encrypted in transit whenever sent over the network (for
                example, during backups or app updates).
              </Typography>
              <Typography variant="body1">
                We do not store or access your personal reading data on our
                servers.
              </Typography>
            </div>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              4. Data Sharing
            </Typography>
            <div className="space-y-4">
              <Typography variant="body1">
                Your reading data is never shared with any third parties.
              </Typography>
              <div>
                <Typography variant="body1" className="mb-2">
                  The only data that may be shared is:
                </Typography>
                <ul className="list-disc list-inside ml-4 text-base">
                  <li>Anonymous crash/performance analytics</li>
                </ul>
                <Typography variant="body1" className="mt-2">
                  This data cannot identify you personally.
                </Typography>
              </div>
              <Typography variant="body1">
                Pageist does not share or sell data for advertising or marketing
                purposes.
              </Typography>
            </div>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              5. Data Retention
            </Typography>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Your reading logs remain on your device until you delete the app
                or remove the data manually.
              </li>
              <li>
                If you export a backup, you are responsible for its storage.
              </li>
              <li>
                Crash analytics may be stored by third-party services (Expo,
                Google Play) for a limited time according to their policies.
              </li>
            </ul>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              6. Data Deletion Requests
            </Typography>
            <div className="space-y-4">
              <Typography variant="body1">
                Because Pageist does not require accounts and does not store
                your reading data on servers:
              </Typography>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                <li>
                  You can delete all your data by deleting the app from your
                  device.
                </li>
                <li>
                  If you have exported backups, delete those files manually.
                </li>
              </ul>
              <Typography variant="body1">
                For questions or assistance with deletion, contact us at:{" "}
                <a
                  href="mailto:de.pavlenko.dev@gmail.com"
                  className="text-primary underline hover:text-primary-variant"
                >
                  de.pavlenko.dev@gmail.com
                </a>
              </Typography>
            </div>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              7. Children&apos;s Privacy
            </Typography>
            <div className="space-y-4">
              <Typography variant="body1">
                Pageist is designed for teens and adults and is not intended for
                children under 13. We do not knowingly collect data from anyone
                under 13. If a parent believes their child under 13 has used the
                app, please contact us to remove the data.
              </Typography>
            </div>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              8. Third-Party Services
            </Typography>
            <div className="space-y-4">
              <Typography variant="body1">Pageist may use:</Typography>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                <li>
                  Expo / Google Play Services for crash reporting and updates
                </li>
                <li>
                  Mixpanel for anonymous analytics of app usage and feature
                  interactions
                </li>
              </ul>
              <Typography variant="body1">
                These services may collect technical information such as device
                type, OS version, session events, and app usage patterns, but
                they do not collect your reading logs, books, or pages.
              </Typography>
              <Typography variant="body1">
                Please review their privacy policies as well.
              </Typography>
            </div>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              9. Changes to This Policy
            </Typography>
            <div className="space-y-4">
              <Typography variant="body1">
                We may update this Privacy Policy from time to time.
              </Typography>
              <Typography variant="body1">
                Updates will be posted on this page with a new &quot;Last
                updated&quot; date.
              </Typography>
            </div>
          </section>

          <hr className="border-outline" />

          <section>
            <Typography variant="h3" className="mb-4">
              10. Contact Us
            </Typography>
            <div className="space-y-4">
              <Typography variant="body1">
                If you have questions or requests regarding privacy, contact us:
              </Typography>
              <div className="space-y-2">
                <Typography variant="body1">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:de.pavlenko.dev@gmail.com"
                    className="text-primary underline hover:text-primary-variant"
                  >
                    de.pavlenko.dev@gmail.com
                  </a>
                </Typography>
                <Typography variant="body1">
                  <strong>Developer:</strong> Denys Pavlenko
                </Typography>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
