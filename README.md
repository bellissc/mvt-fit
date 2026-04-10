# MVT Fitness Prototype

This is a browser-based MVP prototype for a personal training app with:

- trainer login and client roster management
- trainer invite flow for new clients
- client login and daily workout tracking
- client intake form for onboarding
- macro calculator for trainers
- meal catalog with calorie, macro, and micronutrient totals
- progress logging
- mobile-friendly layout
- local browser persistence using `localStorage`

## How to test

1. Open [index.html](C:\Users\Gamer\OneDrive - coreconnections.ca\Desktop\Fitness App\index.html) in a browser.
2. Sign in with one of the demo accounts:
   - Trainer: `coach@coachflow.test` / `demo123`
   - Client: `alex@coachflow.test` / `demo123`
3. Test the trainer flow:
   - choose a client
   - create a new client invite
   - search exercises and add them to a workout day
   - calculate calorie and macro targets
   - search foods from the catalog and add them to a day and meal
   - submit the meal plan to the client
   - submit the workout plan to the client
   - mark workout items complete
4. Test the client flow:
   - use an invite code from the trainer dashboard
   - complete the intake form
   - sign in with the invited email and the password you created
   - review notifications for published plans
   - open the daily workout
   - mark items complete
   - submit a progress log
5. If the demo gets into a bad state while testing, click `Reset demo data` in the top bar.

## Files

- [index.html](C:\Users\Gamer\OneDrive - coreconnections.ca\Desktop\Fitness App\index.html): app structure
- [styles.css](C:\Users\Gamer\OneDrive - coreconnections.ca\Desktop\Fitness App\styles.css): responsive UI styling
- [app.js](C:\Users\Gamer\OneDrive - coreconnections.ca\Desktop\Fitness App\app.js): seeded data and UI logic
- [schema.sql](C:\Users\Gamer\OneDrive - coreconnections.ca\Desktop\Fitness App\schema.sql): starter relational schema for a real backend
- [manifest.json](C:\Users\Gamer\OneDrive - coreconnections.ca\Desktop\Fitness App\manifest.json): install metadata for later PWA work
- [USER-GUIDE.md](C:\Users\Gamer\OneDrive - coreconnections.ca\Desktop\Fitness App\USER-GUIDE.md): simple tester instructions for trainer and client flows

## Notes

- This version is intentionally no-build because `node` and `npm` are not installed in the current environment.
- Passwords are demo-only and stored in plain text for prototype simplicity. A production version must use secure authentication and hashed passwords.
- The current app uses fixed demo data. The next step is to move this into a real backend with auth and database persistence.
- The invite flow is simulated locally. In production, `user_invites` should store secure tokens and the app should send email links through a provider like Resend, Postmark, or SendGrid.
- The nutrition catalog is currently a curated starter list. In production, this should connect to a larger verified food database for broader coverage.
