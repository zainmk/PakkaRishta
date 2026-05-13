# TODO

## 1. Back Button / Swipe-Back Gesture (History API)

**Problem**

The app uses state-based navigation (a `activeScreen` state in `App.jsx` and `selectedProfile` state for the profile overlay). This works well for a native-app feel, but has one significant gap on mobile web: the hardware back button on Android and the swipe-back gesture on iOS Safari do not navigate to the previous screen — they exit the app entirely, or navigate back in the browser's own history to wherever the user came from before opening the app.

This is jarring and unintuitive. A user who taps a profile card, views the ProfileScreen, then hits back expects to return to the swipe stack — not leave the app.

**Solution**

Use the browser's [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to push synthetic history entries when navigating forward, and listen for the `popstate` event to intercept back navigation.

The approach:
1. When opening a new screen or overlay (e.g. ProfileScreen), call `window.history.pushState({ screen: 'profile' }, '')` to push a fake entry onto the browser's history stack.
2. Add a `popstate` event listener on mount that fires when the user presses back. Instead of letting the browser navigate, call the appropriate state setter to close the overlay or return to the previous screen.
3. When the user navigates forward again (e.g. opens a new profile), push another entry. When they dismiss it programmatically (e.g. tapping the close button), call `window.history.back()` to keep the history stack in sync.

This gives back-button support without introducing React Router, keeping the app's URL clean (`/` always) and preserving the native-app feel.

**Scope**

Affects `App.jsx`, `ProfileScreen.jsx`, and any future overlays or screen transitions. Best implemented as a small custom hook (e.g. `useHistoryBack(onBack)`) that encapsulates the `pushState` + `popstate` listener pattern and can be dropped into any screen or overlay.
