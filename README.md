# Room Light System

A small JavaScript project that simulates a smart room light using classes.

## What it does

There are two classes; `Light` and `RoomLight`.

`Light` is the base class. It holds the light's on/off state and lets you check or toggle it.

`RoomLight` extends `Light` and adds an `automaticLightSwitch()` method that checks the current time. If it's 6PM or later, it turns the light on. If it's before 6PM, it turns it off, automatically.

You can also manually toggle the light with `switchLight()` or check its status with `showLightStatus()`.

## Concepts used

- **Classes** - `Light` and `RoomLight` are both ES6 classes with a constructor and methods.
- **Inheritance** - `RoomLight` extends `Light`, so it gets access to all of `Light`'s methods without rewriting them.
- **`super`** - used inside `RoomLight` to call the parent class's methods, like `super.switchLight()` and `super.getLightStatus()`.
- **Default parameter** - `constructor(lightOn = false)` means if you create a `RoomLight()` without passing anything, the light starts off by default instead of throwing an error.
- **Date API** - `new Date().getHours()` is used to get the current hour in real time, which drives the automatic switching logic.