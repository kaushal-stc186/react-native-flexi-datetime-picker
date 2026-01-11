### A Highly Customizable Date & Time Picker Modal for React Native

**react-native-flexi-datetime-picker** is the ultimate all-in-one solution for handling dates and times in your React Native applications. Built with performance and flexibility in mind, this package combines a powerful **Calendar Grid** and a smart **Time Selector** into a single, lightweight installation.

Whether you need a simple birthday selector, a complex booking system with blocked weekends, or an event scheduler with time intervals, this library offers full control over styling and logic.

## 🚀 Key Features

*   📅 **Advanced Date Picker:**
    *   Full monthly grid view (Calendar style).
    *   **Preset Support:** Quick-select options (e.g., "Today", "Next Week").
    *   **Smart Logic:** Easily block specific days (e.g., weekends) or disabled ranges.
    *   **Event Marking:** Highlight specific dates with custom colored dots.
*   ⏰ **Smart Time Picker:**
    *   Supports both **12-hour (AM/PM)** and **24-hour** formats.
    *   **Dynamic Intervals:** Set minute steps (e.g., 15-minute slots).
    *   **Time Constraints:** Set minimum/maximum times relative to "now".
    *   **AM/PM Toggle:** Quick access to AM/PM buttons in header.
*   🎨 **Fully Themeable:**
    *   100% Customizable styles (colors, shapes, fonts).
    *   Built with **TypeScript** for excellent developer experience.
    *   Responsive design using `react-native-size-matters`.
    *   Works seamlessly on **iOS** and **Android**.
*   ⚡ **Modern Performance:**
    *   Uses `react-native-reanimated` for smooth, performant animations.
    *   Built on React Native's native `Modal` component (no external modal dependencies).
    *   Optimized rendering with `FlatList` for efficient scrolling.

## Installation

```bash
npm install react-native-flexi-datetime-picker
# or
yarn add react-native-flexi-datetime-picker
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react-native-reanimated react-native-size-matters
# or
yarn add react-native-reanimated react-native-size-matters
```

**Note:** Make sure to follow the [react-native-reanimated setup instructions](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/) for your platform.


# Usage
```jsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { DatePicker, TimePicker } from 'react-native-flexi-datetime-picker';

const App = () => {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick Date" onPress={() => setShowDate(true)} />
      <Button title="Pick Time" onPress={() => setShowTime(true)} />

      <DatePicker
        isVisible={showDate}
        onConfirm={(date) => {
          console.log(date); // YYYY-MM-DD
          setShowDate(false);
        }}
        onClose={() => setShowDate(false)}
      />

      <TimePicker
        isVisible={showTime}
        onConfirm={(time) => {
          console.log(time); // HH:MM
          setShowTime(false);
        }}
        onClose={() => setShowTime(false)}
      />
    </View>
  );
};

export default App;
```


## 📦 Package Structure

This is a wrapper package that combines:
- `react-native-flexi-date-selector` - Advanced date picker with calendar grid
- `react-native-flexi-time-selector` - Smart time picker with 12/24h support

Both packages are automatically installed as dependencies and re-exported for convenience.

### Architecture

- **Wrapper Package:** Re-exports components and types from underlying packages
- **No Source Code:** This package contains only configuration and re-exports
- **Peer Dependencies:** Shared dependencies (react-native-reanimated, react-native-size-matters) must be installed in your app
- **Type Safety:** Full TypeScript support with exported types from both packages

## Documentation

For full prop documentation and advanced examples, please visit the specific package links:

- [Date Picker Documentation](https://www.npmjs.com/package/react-native-flexi-date-selector)
- [Time Picker Documentation](https://www.npmjs.com/package/react-native-flexi-time-selector)

### React Native Engineering Rules Compliance

Both underlying packages follow React Native engineering best practices:
- ✅ Uses `Pressable` for all interactive elements
- ✅ Uses `gap` for spacing (no margin)
- ✅ Parents own layout (no layout hacks)
- ✅ Uses `react-native-reanimated` for UI thread animations
- ✅ Uses native `Modal` component (no external modal dependencies)
- ✅ Extracted hooks for single responsibility
- ✅ Proper file structure with separated concerns

