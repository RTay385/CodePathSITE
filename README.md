# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Ryan Tay**

Time spent: **3** hours spent in total

Link to project: https://glitch.com/edit/#!/boulder-astonishing-beach

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:\
![http://g.recordit.co/uTlfyKWGMP.gif]\
![http://g.recordit.co/4FPYfpTw8R.gif]\
![http://g.recordit.co/RUfGG4ROHP.gif]

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   stackoverflow, w3schools

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   As someone who has worked with web development tools before, I was fairly comfortable working on this submission. However, I do generally use javaScript UI libraries and React/Angular instead of pure HTML/CSS.
   So, I was a little challenged by the styling syntax, but I was able to figure most of it out by trial an error and referencing the w3schools pages. Specifically, it was hard to understand the interactions
   between the margins and the styling of other properties such as image display type. This led to
   an issue embedding the img component inside the button component. The issue was that changing from a hidden display to inline-block display type would make the box have additional bottom margin around it.
   I suspect this is because the image is technically wrapped in some other component or division before it is displayed. However, it was hard to inspect exactly what was changing, so I used a different approach.
   In order to fix this, I used the background-image property of each button to insert the images. First, I set the background-image of each button to my desired image. Then I set the images to display only when
   the button was active or lit, as well as removed the repeat image property and decreased the image size so that we could still see the color change. I also standardized the image size and position.
   I looked up background-etc props from w3schools and initially searched for the img margin issue on stackoverflow which ultimately was not helpful.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   Seeing as this submission is more a collaboration between workday and codePath, I am curious about how much web development still takes place with pure HTML/CSS like this project.
   MY experience has been quite different to this submission and I believe that this kind of development is unwieldy and hard to debug compared to more modern methods. For example, do
   older websites that we may have to update often use this lower-level construction or have most sites moved to modern development tools? Furthermore, I would like to know how much
   of the submission runs on the client side and how much is handled by the webhost hire, and also how to delegate or decide that process manually.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   If I had extra time, I would love to add something like difficulty modifiers that the player could select. For example, I would let the user decide on the number of boxes, maximum pattern length,
   time between tones, and minimum pattern length to start width. Also, I would add a color-blind mode as well a customizer to select box color. In terms of refactoring, the guess function
   seems like it could be changed quite a bit. The guessCounter and pattern variables seems vaguely redundant and I think they could be reused. Additionally, I'm not sure if the styles can be cleaned up
   but there is alot of repeated code in there as well.

## License

    Copyright Ryan Tay

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
