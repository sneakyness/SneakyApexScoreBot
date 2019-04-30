# SneakyApexScoreBot
Example of using [Tesseract OCR](https://github.com/naptha/tesseract.js#tesseractjs), aka Optical Character Recognition, which compiled to JS via [emscripten](https://github.com/kripken/emscripten), to read data from screenshots of Apex Legends score summary screens.  
  
I was inspired to make this for two reasons, the first being that this consumes a significant amount of time and manpower during tournament events, and the second being that these people often count the results incorrectly. 

## It contains 3 examples
- The first is a small initial test, in which I clipped the header/value of one field out of the image and applied Tesseract to it
- The second is closer to how I would like things to eventually function, where the areas of interest are clipped from a whole screenshot, and read individually
- The third is showing you the raw bounding boxes of areas Tesseract thinks is text, demonstrating the necessity to spoonfeed it smaller images

### I don't have time for this, show me a picture
Computer, show me tane


## What Am I Going To Do With This?
- Probably make it work better
- Check [issues](https://github.com/sneakyness/SneakyApexScoreBot/issues)

## Other potential uses
- Discord Bot for Tournament Scorekeeping
    - Would also have to start verifying badges 
- VOD statistics compilation
    - Using ffmpeg, rapidly parse out every stat summary screen from a given video
    - Tally them up to generate session totals
- Killfeed sniper 
    - An app that either watches your stream or watches the screenshots directory
    - Any time you see a name in the kill feed that looks like a TTV streamer, you'd take a screenshot (or the stream bot would do so automatically)
    - It would parse the names out of the feed, search twitch for them, and play an alert tone if live
    
## Support
Unfortunately I am likely too busy playing Apex to offer free technical support. That said, I would be more than willing to accept subscriptions, donations, or bits on my [Twitch.tv stream](https://twitch.tv/sneakyness), preferably while live, in order to assist you.  

Hit me with a /w sneakyness on twitch, or ping me in the [official apex discord](https://discord.gg/apexlegends) to figure out how much help you'll need, and what it will cost. 

Do NOT use the issues tab as a place to submit your issues with using the software, technical support requests will be deleted. It is for issues with the codebase itself, thanks.

## Contributing
Pull requests welcome! I don't really care if it's ugly, as long as it works. We can make it nice later, saves us something to do should Apex/Origin go down 😏
