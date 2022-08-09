## Methods

-   [Keyboard](https://robotjs.io/docs/syntax#keyboard)
    -   [Keys](https://robotjs.io/docs/syntax#keys)
    -   [setKeyboardDelay](https://robotjs.io/docs/syntax#setkeyboarddelayms)
    -   [keyTap](https://robotjs.io/docs/syntax#keytapkey-modifier)
    -   [keyToggle](https://robotjs.io/docs/syntax#keytogglekey-down-modifier)
    -   [typeString](https://robotjs.io/docs/syntax#typestringstring)
    -   [typeStringDelayed](https://robotjs.io/docs/syntax#typestringdelayedstring-cpm)
-   [Mouse](https://robotjs.io/docs/syntax#mouse)
    -   [setMouseDelay](https://robotjs.io/docs/syntax#setmousedelayms)
    -   [moveMouse](https://robotjs.io/docs/syntax#movemousex-y)
    -   [moveMouseSmooth](https://robotjs.io/docs/syntax#movemousesmoothx-y)
    -   [mouseClick](https://robotjs.io/docs/syntax#mouseclickbutton-double)
    -   [mouseToggle](https://robotjs.io/docs/syntax#mousetoggledown-button)
    -   [dragMouse](https://robotjs.io/docs/syntax#dragmousex-y)
    -   [getMousePos](https://robotjs.io/docs/syntax#getmousepos)
    -   [scrollMouse](https://robotjs.io/docs/syntax#scrollmousex-y)
-   [Screen](https://robotjs.io/docs/syntax#screen)
    -   [getPixelColor](https://robotjs.io/docs/syntax#getpixelcolorx-y)
    -   [getScreenSize](https://robotjs.io/docs/syntax#getscreensize)
    -   [screen.capture](https://robotjs.io/docs/syntax#screencapturex-y-width-height)
-   [Bitmap](https://robotjs.io/docs/syntax#bitmap)
    -   [Properties](https://robotjs.io/docs/syntax#properties)
    -   [colorAt](https://robotjs.io/docs/syntax#colorat)

___

## Keyboard

## Keys

`keyToggle` and `keyTap` support for following keys.

**Note: The names of the letter and number keys are the same as that single letter or digit. For example: b is the “b” key and 5 is the “5” key.**

| **Key** | **Description** | **Notes** |
| --- | --- | --- |
| backspace |   |   |
| delete |   |   |
| enter |   |   |
| tab |   |   |
| escape |   |   |
| up | Up arrow key |   |
| down | Down arrow key |   |
| right | Right arrow key |   |
| left | Left arrow key |   |
| home |   |   |
| end |   |   |
| pageup |   |   |
| pagedown |   |   |
| f1 |   |   |
| f2 |   |   |
| f3 |   |   |
| f4 |   |   |
| f5 |   |   |
| f6 |   |   |
| f7 |   |   |
| f8 |   |   |
| f9 |   |   |
| f10 |   |   |
| f11 |   |   |
| f12 |   |   |
| command |   |   |
| alt |   |   |
| control |   |   |
| shift |   |   |
| right\_shift |   |   |
| space |   |   |
| printscreen |   | No Mac support |
| insert |   | No Mac support |
| audio\_mute | Mute the volume |   |
| audio\_vol\_down | Lower the volume |   |
| audio\_vol\_up | Increase the volume |   |
| audio\_play | Play |   |
| audio\_stop | Stop |   |
| audio\_pause | Pause |   |
| audio\_prev | Previous Track |   |
| audio\_next | Next Track |   |
| audio\_rewind |   | Linux only |
| audio\_forward |   | Linux only |
| audio\_repeat |   | Linux only |
| audio\_random |   | Linux only |
| numpad\_0 |   | No Linux support |
| numpad\_1 |   | No Linux support |
| numpad\_2 |   | No Linux support |
| numpad\_3 |   | No Linux support |
| numpad\_4 |   | No Linux support |
| numpad\_5 |   | No Linux support |
| numpad\_6 |   | No Linux support |
| numpad\_7 |   | No Linux support |
| numpad\_8 |   | No Linux support |
| numpad\_9 |   | No Linux support |
| lights\_mon\_up | Turn up monitor brightness | No Windows support |
| lights\_mon\_down | Turn down monitor brightness | No Windows support |
| lights\_kbd\_toggle | Toggle keyboard backlight on/off | No Windows support |
| lights\_kbd\_up | Turn up keyboard backlight brightness | No Windows support |
| lights\_kbd\_down | Turn down keyboard backlight brightness | No Windows support |

Up to date as of v0.4.4.

## setKeyboardDelay(ms)

Sets the delay in milliseconds to sleep after a keyboard event. This is 10ms by default.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `ms` | Time to sleep in milliseconds. | None |

## keyTap(key, \[modifier\])

Press a single key.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `key` | See [keys](https://robotjs.io/docs/syntax#keys). | None |
| `modified` | String or an array. Accepts alt, command (win), control, and shift. | None |

## keyToggle(key, down, \[modifier\])

Hold down or release a key.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `key` | See [keys](https://robotjs.io/docs/syntax#keys). | None |
| `down` | Accepts down or up. | None |
| `modifier` | String or an array. Accepts alt, command (mac), control, and shift. | None |

## typeString(string)

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `string` | The string to send. | None |

## typeStringDelayed(string, cpm)

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `string` | The string to send. | None |
| `cpm` | Characters per minute. | None |

## Mouse

## setMouseDelay(ms)

Sets the delay in milliseconds to sleep after a mouse event. This is 10ms by default.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `ms` | Time to sleep in milliseconds. | None |

## moveMouse(x, y)

Moves mouse to x, y instantly, with the mouse button up.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `x` |   | None |
| `y` |   | None |

**Examples**

```
var robot = require("robotjs");

//Move the mouse to 100, 100 on the screen.
robot.moveMouse(100, 100);
```

## moveMouseSmooth(x, y)

Moves mouse to x, y human like, with the mouse button up.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `x` |   | None |
| `y` |   | None |

## mouseClick(\[button\], \[double\])

Clicks the mouse.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `button` | Accepts left, right, or middle. | left |
| `double` | Set to true to perform a double click. | false |

**Examples**

```
var robot = require("robotjs");

robot.mouseClick();
```

## mouseToggle(\[down\], \[button\])

Toggles mouse button.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `down` | Accepts down or up. | down |
| `button` | Accepts left, right, or middle. | left |

**Examples**

```
var robot = require("robotjs");

robot.mouseToggle("down");

setTimeout(function()
{
    robot.mouseToggle("up");

}, 2000);
```

## dragMouse(x, y)

Moves mouse to x, y instantly, with the mouse button held down.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `x` |   | None |
| `y` |   | None |

**Examples**

```
var robot = require("robotjs");

//Mouse down at 0, 0 and then drag to 100, 100 and release.
robot.moveMouse(0, 0);
robot.mouseToggle("down");
robot.dragMouse(100, 100);
robot.mouseToggle("up");
```

## getMousePos()

Gets the mouse coordinates.

**Return**

Returns an object with keys x and y.

**Examples**

```
var robot = require("robotjs");

var mouse = robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
```

Scrolls the mouse in any direction.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `x` | The magnitude and direction of the scroll left and right. Left is negative. | None |
| `y` | The magnitude and direction of the scroll up and down. Down is negative. | None |

**Examples**

```
var robot = require("robotjs");

robot.scrollMouse(50, 0);

setTimeout(function()
{
    robot.scrollMouse(50, 0);
}, 2000);
```

## Screen

## getPixelColor(x, y)

Gets the pixel color at x, y. This function is perfect for getting a pixel or two, but if you’ll be reading large portions of the screen use [screen.capture](https://robotjs.io/docs/syntax#screencapture).

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `x` |   | None |
| `y` |   | None |

**Return**

Returns the hex color code of the pixel at x, y.

## getScreenSize()

Gets the screen width and height.

**Return**

Returns an object with `.width` and `.height`.

## screen.capture(\[x\], \[y\], \[width\], \[height\])

Gets part or all of the screen.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `x` |   | 0 |
| `y` |   | 0 |
| `width` |   | Screen width |
| `height` |   | Screen height |

If no arguments are provided, screen.capture will get the full screen.

**Return**

Returns a [bitmap](https://robotjs.io/docs/syntax#bitmap) object.

**Examples**

For higher density screens (Macs) the resulting screen capture could be larger than the area requested. You can work around this by dividing the image size by the requested size. For example:

```
var size = 10;
var img = robot.screen.capture(0, 0, size, size);
// Support for higher density screens.
var multi = img.width / size;
// Get color at 2, 3.
var color = img.colorAt(2 * multi, 3 * multi);
```

## Bitmap

This is an object returned by [screen.capture](https://robotjs.io/docs/syntax#screencapturex-y-width-height).

## Properties

| **Property** | **Description** |
| --- | --- |
| `width` | The width of the bitmap. |
| `height` | The height of the bitmap. |
| `image` | The raw image (buffer). |
| `byteWidth` |   |
| `bitsPerPixel` |   |
| `bytesPerPixel` |   |

## colorAt

Gets the pixel color at x, y of a bitmap.

**Arguments**

| **Argument** | **Description** | **Default** |
| --- | --- | --- |
| `x` |   | None |
| `y` |   | None |

**Return**

Returns the hex color code of the pixel at x, y.

**Examples**

```
var robot = require("robotjs");

//Get a 100x100 screen capture starting at 0, 0.
var img = robot.screen.capture(0, 0, 100, 100);

console.log(img.width)

//Get pixel color at 50, 50.
var hex = img.colorAt(50, 50);
console.log(hex);
```