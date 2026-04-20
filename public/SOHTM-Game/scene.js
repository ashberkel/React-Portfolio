const character = [
  {
    name: "charCapn", firstTalk: true,
    diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "???: G’evening, sir. I hope you’re enjoying the refreshments._Carter: Enjoying it enough. What’s the deal, anyway?_???: We’ve had some issues with our heading—bad data, or so my experts say._Carter: Hm._???: Sir?_Carter: Gotta call bullshit when I hear it. I’ve heard breathing from the next room louder than the wind outside, and those clouds out the window haven’t even budged._???: …Sharp eye. Most of the other passengers seem content to ignore that detail if they’ve noticed. I don’t believe I have your name._Carter: I didn’t give it. But it’s Nicholas Carter._???: Detective Carter… right. I’m Captain Niccals._Captain Niccals: I've heard of your reputation. You do good work._Carter: Just like making sure problems get solved._Captain Niccals: Problems… yes. Got plenty of those to spare these days._Captain Niccals: I wouldn’t usually trouble a guest with this, but circumstances have turned strange as you’ve guessed._Captain Niccals: It’s starting to look like someone on the crew may have caused the accident._Carter: What do you mean?_Captain Niccals: Our engines are dead in the water. Someone either pulled something they shouldn’t have… or they meant to._Captain Niccals: And the list of those who can even get close to the reactor is small._Carter: So it might not be smart banking on inside help alone._Captain Niccals: A fair assessment. I can’t give you a free run of the place—captain or not, I’ve still got rules to follow._Captain Niccals: But…could see your holocard for just a moment?_Carter: Knock yourself out._…_Captain Niccals: There we are. I’ve granted you a bit more clearance. Enough to get you up to the first-class ballroom._Captain Niccals: Head Scientist Gwen’s up there doing her best to keep folks calm._Carter: Why’s she up there and the captain’s down here? Seems like you’re more important._Captain Niccals: Because pointing the nose forward is easy. Keeping the ship flying… that’s her art, not mine. She built half of what keeps us aloft._Carter: Right…_Captain Niccals: Talk to her. Show her your holocard. Tell her I sent you—she’ll give you a fair shake. Might even listen, if you’re lucky._Carter: …And she can be trusted?_Captain Niccals: With my life. And yours. This ship is her magnum opus—she wouldn’t let it fall apart, not after all she’s poured into it._Carter: Right… fine. Not much for R&R anyway. I’ll be back if I dig up anything._Captain Niccals: Good man."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Captain Niccals: I wish I could help you more...I really  do. But I think it's better if you do some work on your own before we chat some more.";
        return dia;
      }
    }
  },
  {
    name: "charSci", firstTalk: true,
    diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Carter: Excuse me...are you Gwen?_Gwen: I don't recognize you so I can't understand why you're being so informal with me. Can I help you, sir?_Carter: Yeah. Captain Niccals sent me about a hunch I have regarding the ship. Said to give you this to prove he sent me._Gwen:...oh really? He sent you up here...based on a hunch of some kind?_Carter: I wouldn't really call 14 solved cases under my belt a hunch. Seems like you guys have a...delicate situation on your hands and he just wants some professional help that's not so..._Gwen: Close to the source?_Carter: Yeah, that._Gwen: Hm._Gwen:...._Gwen: I suppose I can humor you. There's really not any other choice as without any leads...we could be stuck here much longer._Gwen: But I also can't just let citizens waltz around sensitive areas...especially when it comes to the delicate nature of how this airship gets around._Carter: Can't argue with that. I wouldn't do it neither._Gwen: For now...here's what I suggest. Go talk to the engineer on Level B1. Apparently he saw some information regarding the hours before this incident._Carter: Right...thanks, m'am._Gwen: No. Nevber m'am. Just call me Gwen if the alternative is that."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Gwen: Well? Unless you have actual news, I'd prefer you not waste my time.";
        return dia;
      }
    }
  },
  {
    name: "charMads", firstTalk: true, envelopeTalk: false, withHugh: false,
    addEnvelope: function () {
      for (t in $('.invItems')) {
        invCount += 1;
        if (!$(this).hasClass("hide")) {
          console.log("Count is", invCount)
          $("#" + invCount).addClass("envelope");
          $("#" + invCount).append("<img width= '70px' src='images/objects/envelope.png' />")
          $("#" + invCount).addClass("filled");
          pickupSound.play();
          console.log("Added envelope to inventory to" + t.id);
          return false;
        }
      }
    },
    diaOptions: function () {
      var dia;
      if (character[2].withHugh) {
        dia = "Hannibal: I cannot thank you enough for helping with my letter. I think this worked out quite well."
        return dia;
      }
      if (character[3] && character[3].giveEnvelope) {
        dia = "Mads: You shouldn’t be so irate. And you even left your post…_Hugh: I don’t give a shit, Mads. Don’t go sending crap like this with random strangers. What if he opened it??_Mads: Of course he wouldn’t. We had a deal, after all._Hugh: …Do I want to know?_Mads: Don’t worry, dear Hugh._Mads: Well—thank you, Detective. Just for you, I’ll let you know the culprit was…_Mads: Miss Penelope Parker._Carter: Penelope Parker...the reporter?? Yeah, that tracks why she’s snooping around. I’ll keep my eye out for her…_Mads: Please do. And thank you again."
        $("#charPen").removeClass("deleted");
        character[2].withHugh = true;
        return dia;
      }
      else {
      console.log("First time you've met this character?" + this.firstTalk);
      dia = "He doesn't seem interested in addressing you anymore. He's too busy looking around the ballroom.";
      return dia;
    }
  }},
{
  name: "charHugh", firstTalk: true, giveEnvelope: false,
    diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "???: …What? You need something?_Carter: Not really… though I guess…what’s your opinion on this situation?_???:  I don’t really care. All I know is we’re dead in the water. They can keep saying it’s “navigational issues,” but that’s a load of shit._Carter: At least someone around here’s singing my tune..."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "???:Don't you have anything better to do than standing around and botherin' me?";
        return dia;
      }
    }
},
{
  name: "charHugh2",
    diaOptions: function () {
      if (character[2].withHugh) {
      dia = "Hugh: Sorry you had to put up with this idiot."
      return dia;
      }
      dia = "Mads: You shouldn’t be so irate. And you even left your post…_Hugh: I don’t give a shit, Mads. Don’t go sending crap like this with random strangers. What if he opened it??_Mads: Of course he wouldn’t. We had a deal, after all._Hugh: …Do I want to know?_Mads: Don’t worry, dear Hugh._Mads: Well—thank you, Detective. Just for you, I’ll let you know the culprit was…_Mads: Miss Penelope Parker._Carter: Penelope Parker...the reporter?? Yeah, that tracks why she’s snooping around. I’ll keep my eye out for her…_Mads: Please do. And thank you again."
      $("#charPen").removeClass("deleted");
      character[2].withHugh = true;
      return dia;
    }
},
{
  name: "charPen", firstTalk: true,
    diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Carter: Well well. I finally found you._Penelope: Am I supposed to know you were looking for me, sir…?_Carter:  I mean, you’re certainly making people talk._Penelope: A lot of people talk about me… I am a reporter for The Donlynn Times._Carter:  Right. I recall a few times you’ve interrupted our work._Penelope: So what, you’re police then?_Carter:  Detective. Detective Carter._Penelope: Carter… Carter. Oh! I have heard of you. Adrian Gorer—your case, wasn’t it?_Carter:  Yes… suppose that’s my “best” work._Penelope: Be that as it may, it doesn’t tell me why you’re hunting me down. Unless you think I’m your bad guy._Carter: I don’t think you’re bad, Miss Penelope. I just think reporters tend to stick their nose in places it doesn’t belong._Carter: A little too much._Carter: The doorman on Floor 6 saw you… rummaging around someone’s pocket._Penelope: …Shit._Carter: Care to explain what little goodie you dug up?_Penelope: And I’m supposed to hand that kind of information out for free?_Carter: I’d sure appreciate it._Penelope: Well… doesn’t matter much anyway. All I found was a scrap of paper._Carter: Just a scrap of paper?_Penelope: Looks like it was torn in half. Even if someone had the other piece, the handwriting is terrible._Carter: Hm. Maybe I’ll keep my eye out."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Penelope: There’s something weird about all this… I can feel it.";
        return dia;
      }
    }
},
{
  name: "charPen2", firstTalk: true,
    diaOptions: function () {
      var dia;
      if (this.firstTalk) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Carter: First outside my room, now up here… you really don’t stop, huh?_Penelope: Guess I don’t._Penelope: …? Is that—?_Carter:  Yup. The missing part to yours. Can’t say for sure unless we put ’em together._Penelope: Then what are we waiting for?_Carter:  Hold on. I’m not just handing this over like candy._Penelope: Lucky for you, detective—I am handing mine over. Just like that._Carter:  Why?_Penelope: Honestly? I don’t even know where to go with it. Could be a grocery list for all I know._Penelope: And let’s just say… I have a feeling I’ll need a favor later._Penelope: You wouldn’t leave a lady in need high and dry, would you?_Carter:  Hmph._Penelope: Well, it was nice seeing you, detective."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Penelope: There’s something weird about all this… I can feel it.";
        return dia;
      }
    }
},
{
  name: "charMon",
    diaOptions: function () {
      var dia;
      dia = "???: BAD OMEN._Carter: ...? Excuse me, are you alright?";
      return dia;
    }
},
{
  name: "charEngineer", firstTalk: true,
    diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "???: Hey… hey! What are you doing down here??_Carter: I was told to come down here and dig up some info on what the hell’s going on around here._???: That ain’t my problem. And we sure as hell don’t need some nobody stickin’ their nose in our business._Carter: Sounds like you’ve got something to hide._???: Sounds like I’m trying to save your sorry ass. This ain’t a playground down here—there’s a reason us nobodies gotta sign waivers just to take this job._Carter: Right…_???: Anyways, get out of here. I ain’t humoring you—not even for the big wigs upstairs."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "???: Didn’t I tell ya to scram? I’m still not lettin’ you past.";
        return dia;
      }
    }
},]
console.log("Loading char test:" + character[character.length - 1].name);

const clickable = [
  { name: "mirror", desc: "Still got the same dead look in my eyes. It'd be nice if I left that back in Eastwyn." },
  { name: "newspaper", desc: "Enough of that self-serving crap. Ain't helping my mood." },
  { name: "bed", desc: "Middle class comfort? Maybe, but it's too gaudy for my tastes." },
  { name: "luggage", desc: "Delayed indefinitely and only about four days worth of luggage. Just my luck." },
  { name: "doorNum", desc: "Numbers with no real meaning._Besides telling me where I'm supposed to sleep, there's nothing else to figure out." },
  { name: "carpet", desc: "Maybe the ship stopped cuz the crew’s just sittin’ somewhere, mesmerized by these godawful carpet patterns." },
  { name: "elevator", desc: "Real pretty design. Hope it works better than the rest of this ship." },
  { name: "elevatorB", desc: "Guess the workers don't deserve to look at the fancy door pattern." },
  { name: "floatLights", desc: "The lights in there just float. I don't really understand how it works.." },
  { name: "Dine4Lamp", desc: "Tacky. That's the only polite way to put it honestly." },
  { name: "Dine4Window", desc: "At least the view is nice to look at._No bullshit, no pomp...just the sea of stars out there." },
  { name: "paperScrap", desc: "...? Is that...paper tucked into the wall?_The board was pulled enough to wedge it in. Pulling it out without a tool is just going to rip the damn thing..." },
  { name: "largeFloat", desc: "An artificial sea of stars...at least, that's what it looks like to me._Kinda embarrassing when the real deal is right outside the window." },
  { name: "bigSky", desc: "...._Makes you realize all the shit down here doesn't matter much." },
  { name: "umbrella", desc: "I'm sure they're nice to have on a day flight, but right now they're just taking up the view." },
  { name: "poolSeat", desc: "I can imagine some pretty dames soaking up the sun on these things." },
  { name: "brokenWall", desc: "The evidence of my dedication to seeing a case through to the end._Sounds better than tearing a hole in the wall for a damn piece of paper." }]
console.log("Loading clickables test:" + clickable[2].name);

const item = [
  { name: "envelope", inInv: false, desc: "An envelope. It's sealed with wax and smells of cologne." },
  { name: "crowbar", inInv: false, desc: "It's a crowbar...makes it easy to get into things that don't wanna open up." },
  { name: "paperScrap", inInv: false, desc: "A half of a paper scrap. Might be important, might not be." },
  { name: "paperFull", inInv: false, desc: "Well, it's a full note...but it might as well be in a different language." }
  ]
console.log("Loading item test:" + item[0].name);

//SPECIAL CHARACTER - ENGINEER
$("#moveRightB1").click(function () {
$('#charEngineer').removeClass("hide");
$('#crowbar').addClass("itemFade")
dia = character[character.length - 1].diaOptions();
$("#roomFade").removeClass("hide");
diaSplit(dia, () => {
$('#charEngineer').addClass("hide");
$('#crowbar').removeClass("itemFade")
character[character.length - 1].firstTalk = false;
});
});