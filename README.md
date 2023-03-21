The issue happens, on Android only, when using the `exiting` animation on an Animated.View inside a Modal.
In this case happens that the exiting animation is played, the modal become invisible but then the UI is no longer responsive. In the example you're no longer able to press the `Open Modal` button.
Commenting out the `exiting` parameter the issue does not happen.
Also, it's only happening if the animated container is placed inside a Modal.
