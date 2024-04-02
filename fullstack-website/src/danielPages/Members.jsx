import { Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Button, ButtonGroup, Image, Spacer, Text, Flex, Center, AbsoluteCenter } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react';
import Sidebarbuttons from "../utils";
import alex from '../assets/Images/portraits/alex.jpg';
import andrewEdit from '../assets/Images/portraits/andrew-edited.jpg';
import anthony from '../assets/Images/portraits/anthony.jpg';
import athena from '../assets/Images/portraits/athena.jpg';
import athenaAlt from '../assets/Images/portraits/athena-1.jpg';
import bhaskar from '../assets/Images/portraits/bhaskar.jpg';
import caitlyn from '../assets/Images/portraits/caitlyn.jpg';
import chris from '../assets/Images/portraits/chris.jpg';
import dell from '../assets/Images/portraits/dell.jpg';
import eddie from '../assets/Images/portraits/eddie.jpg';
import ellington from '../assets/Images/portraits/ellington.jpg';
import ethan from '../assets/Images/portraits/ethan.jpg';
import ethanAlt from '../assets/Images/portraits/ethan-1.jpg';
import jerry from '../assets/Images/portraits/jerry.jpg';
import jessica from '../assets/Images/portraits/jessica.jpg';
import jessicaAlt from '../assets/Images/portraits/jessica-1.jpg';
import justin from '../assets/Images/portraits/justin.jpg';
import kian from '../assets/Images/portraits/kian.jpg';
import madlen from '../assets/Images/portraits/madlen.jpg';
import maya from '../assets/Images/portraits/maya.jpg';
import stephanusEdit from '../assets/Images/portraits/stephanus-edited.jpg';
import tom from '../assets/Images/portraits/tom.jpg';
import backgroundImage from "../assets/Images/Members_background.jpg"
import Modal from 'react-modal';
import React, { useState } from 'react';
import styled from 'styled-components';


function Members() {
    return (
        <>
        <div style={{ backgroundImage: `url(${backgroundImage})`,
                     height: 'auto', width: "100vw", backgroundAttachment: 'fixed' , left: '0px', top: '0px',
                     backgroundPositionY: "-150px", backgroundSize: 'cover'}}>
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            w='100%'
        >
            <HeaderWithSideButtons />
        </Box>

        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            w='100%'
        >
            <Portraits />
        </Box>
        </div>
        </>
    )
}

function HeaderWithSideButtons() {
    return (
        <>
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            w='100%'
            m={0}
            p={0}
            fontFamily="Lobster"
        >
            <Box width="10%" />
            <Spacer />
            <p style={{ color:'black', fontSize:60, fontWeight:700, textAlign:'center' }}>Members</p>
            <Spacer />
            <Sidebarbuttons text1="Home" text2="About us" text3="Videos" color="black" />
        </Box>
        </>
    )
}

function Portraits() {
    return (
        <>
        <Flex direction="column" alignItems="flex-start">
            <Flex direction="row" alignItems="flex-start">
                <Spacer />
                <MainBox title="Alex Pease" visualComponent={<Image src={alex} />} visualComponent2={<Image src={alex} />} textComponent={<p>
                    Pronouns: please don't thanks<br />
                    Voice Part: Bass<br />
                    Major(s)/Minor(s): Chemistry Major, Data Science + Music minors<br />
                    Semester in Berkeley: 4th<br />
                    Semester in Noteworthy: 3rd<br />
                    Interests: Singing, gaming, complaining, no longer cyberbullying the managers on discord since they started posting in announcements! We love progress!<br />
                    Bio: "I’ve been drafting my bio with some other people and ran out of ideas, but I got some pretty funny feedback in the process:
                        – “You’re not funny”
                        – “You’re doing great”
                        – “No.”
                        – “I love long stories”
                        – “Yo wanna do NYT Connections”
                        – “Wordle?”
                        – “Wait you got 6”

                        Anyways I give up I’m too tired for this. This is Alex and you’ve been watching Disney channel.

                        – “Alex you need to work on this”

                        aslfjasdlkasdfl;kjflsjka I’ll get better ideas next semester I swear trust" ~Alex, Fall 2023

                        I unfortunately did not get better ideas next semester (now), so I'll just copy paste and make fun of myself I guess? Seems about right.
                        
                        
                            
                        "I’ve been drafting my bio with some other people and ran out of ideas, but I got some pretty funny feedback in the process:
                        – “You’re not funny”
                        – “You’re doing great”
                        – “No.”
                        – “I love long stories”
                        – “Yo wanna do NYT Connections”
                        – “Wordle?”
                        – “Wait you got 6”

                        Anyways I give up I’m too tired for this. This is Alex and you’ve been watching Disney channel.

                        – “Alex you need to work on this”

                        aslfjasdlkasdfl;kjflsjka I’ll get better ideas next semester I swear trust" ~Alex, Fall 2023

                        I unfortunately did not get better ideas next semester (now), so I'll just copy paste and make fun of myself I guess? Seems about right.
                        Turn on screen reader support
                        To enable screen reader support, press Ctrl+Alt+Z To learn about keyboard shortcuts, press Ctrl+slash<br />
                    Anything that you would like us to know? please check out applerankings.com<br />
                    How was your day? Option 14, wehhhh, You know I want you.
                </p>} />
                <Spacer />
                <MainBox title="Andrew Tran" visualComponent={<Image src={andrewEdit} />} visualComponent2={<Image src={andrewEdit} />} textComponent={<p>
                    Pronouns: he/him<br />
                    Voice Part: Tenor 2<br />
                    Major(s)/Minor(s): Chemical Engineering<br />
                    Semester in Berkeley: 6th<br />
                    Semester in Noteworthy: 4th<br />
                    Interests: Stephanus Yang, Evan Yang, Evanus Yang, Stephie, Steph Anus, Steph, Mr. President, My President 👨‍❤️‍💋‍👨, Steph Curry<br />
                    Bio:  
                        Responder updated this value.
                            
                        Here are some random book quotes that go hard:

                        - "At least seventy three."
                        - "What?"
                        - "Canes? Canes!?!?! CAAANEEEES!!!!!"
                        - 나는 사나이
                        점잖아 보이지만 놀 땐 노는 사나이
                        때가 되면 완전 미쳐 버리는 사나이
                        근육보다 사상이 울퉁불퉁한 사나이
                        그런 사나이
                        - “I’m atheist, gay, and Chinese. I’m not seeing heaven.”
                        - "I could fit AT LEAST seventy in there."
                        - "George looked into Franks chocolate orbs."
                        - "Everything the light touches is mine you fuck."
                        - "Hup! Hap! Hup! Hyah!"
                        - “Add to the stack! Add to the stack!!”<br />
                    Anything that you would like us to know? ur mom<br />
                    How was your day? You know I want you.
                </p>} />
                <Spacer />
                <MainBox title="Athena Liu" visualComponent={<Image src={athena} />} visualComponent2={<Image src={athenaAlt} />} textComponent={<p>
                    Pronouns: they/he<br />
                    Voice Part: Tenor 1<br />
                    Major(s)/Minor(s): Chemistry<br />
                    Semester in Berkeley: 2nd<br />
                    Semester in Noteworthy: 2nd<br />
                    Interests: crochet, machine girl, laoganma, kim kitsuragi, chemistry, daniel radcliffe's left ear, crustacean, steamed hams<br />
                    Bio: THE PESTO.....!!!!!!!!!!! YAY THE PESTO!!!!!!!!!!!!!! WHEEEEEEEEEEE!!!!!! :3333333 xoxo UwU !!!LOBOTOMIZER BEAM GO!!!
                        ..... .... [reboot] ... [3] ... [2] ... [1] ... [liftoff] ... ... ... how do you feel? ........ x xxrs xxxxxssxxxxxxxgggggrrrrfffffhhhh
                         hhh h a a ab abc i am yes no up down tom bottom strange charm i. i. ... i....... i kick miette's body like a football there are 
                         cathedrals everywhere for those with eyes to see mlp infection au neil banging out the tunes eggs bacon grits sausage nyc diner serves
                          coca-cola the old fashioned way meth lab oompa loompa reddit's worst volume control ui mogging mewing road work ahead i sure hope it
                           does ebony darkness dementia raven way dogecoin neuralink coquette spiders georg mom sold me to one direction and ............ [signal lost]<br />
                    Anything that you would like us to know? sometimes<br />
                    How was your day? Oh, sing it now!, All around the world!, wehhhh, You know I want you.
                </p>} />
                <Spacer />
            </Flex>
            <Flex direction="row" alignItems="flex-start">
                <Spacer />
                <MainBox title="Bhaskar Roberts" visualComponent={<Image src={bhaskar} />} visualComponent2={<Image src={bhaskar} />} textComponent={<p>
                    Pronouns: He/Him<br />
                    Voice Part: Tenor 2<br />
                    Major(s)/Minor(s): Computer Science<br />
                    Semester in Berkeley: No one knows<br />
                    Semester in Noteworthy: 3rd<br />
                    Interests: Dropping out of school to try and make it on Broadway<br />
                    Bio: A few years ago, I was driving alone on the highway at cruising speed. The road was straight and the sun was hot, and the moment felt right to
                     sing my heart out. Car singing is way more fun than shower singing because in the car, I really let loose. So I was reaching the climax of a favorite
                      Broadway showstopper, belting with all my heart, when I glanced out my right window. There was a car driving alongside me, and inside was a woman
                       staring at me with an expression that said, “Does he think the car is soundproof?” We locked eyes, sharing the moment when I realized that she was
                        watching me not realize that she heard me. We both looked away quickly. It was awkward for both of us.

                        There has to be a moral to this story somehow. Maybe it’s that singing should be emotive without inhibition. Sing for yourself and sing from the heart.
                         Or maybe the moral is that you should never make eye contact with people because if they’re already looking at you it’ll be twice as awkward as not
                          making eye contact. Yeah, I think that’s the moral.<br />
                    Anything that you would like us to know? <br />
                    How was your day? Yes, You know I want you.
                </p>} />
                <Spacer />
                <MainBox title="Caitlyn Liao" visualComponent={<Image src={caitlyn} />} visualComponent2={<Image src={caitlyn} />} textComponent={<p>
                    Pronouns: <br />
                    Voice Part: Tenor 1<br />
                    Major(s)/Minor(s): Political Economy<br />
                    Semester in Berkeley: 2nd<br />
                    Semester in Noteworthy: 2nd<br />
                    Interests: -singing 😍, dance, boba, the color purple, bunnies, clothes, asian food (and maybe kpop)<br />
                    Bio: Born with the initials CAL, I knew from the start it had to be the place for me. Never mind the fact that everyone around me wanted UCLA more 
                        (dining? housing? location? CONCERTS), or the fact that the Berkeley housing crisis is severe (who needs housing anyways). So I worked hard my
                         whole young life and finally made it here, to the Area of the Bay, where all my dreams are guaranteed to come true! Now I am making the most
                          of my valuable time at this extraordinary, prestigious university by singing for over 8 hours a week in a basement. Live laugh love cal 
                          (I have no choice in the matter)<br />
                    Anything that you would like us to know? <br />
                    How was your day? 
                </p>} />
                <Spacer />
                <MainBox title="Christopher Yuan " visualComponent={<Image src={chris} />} visualComponent2={<Image src={chris} />} textComponent={<p>
                    Pronouns: He/Him<br />
                    Voice Part: Tenor 2<br />
                    Major(s)/Minor(s): Microbial Biology<br />
                    Semester in Berkeley: 8th<br />
                    Semester in Noteworthy: 1st<br />
                    Interests: (3+15)/2=9<br />
                    Bio:  you know the hard part about writing this bio is making it sound interesting and funny like everyone else's and pretending like i'm not the
                         token basic bitch here, so here, have some of my historical quotes of all time: 
     
                        according to all known laws of physics, bees shouldn't be able to fly and you shouldn't be that ugly. but here i am eating honey nut cheerios 
                        --richard nixon
                        
                        do you think god stays in heaven because they, too, live in fear of what they have created? haha nukes go brrrrr 
                        --conversation between oppenheimer and his sleep paralysis demon
                        
                        the only way to heal pop music is to have olivia and sabrina get married on my private jet with joshua as the minister so i can get a tax writeoff
                         as a religious institution
                        --taylor swift<br />
                    Anything that you would like us to know?  if you knew then i would have to fuck you<br />
                    How was your day? Yes, No, Oh, sing it now!, All around the world!, What the hell does that mean, Option 14, true, false, wehhhh, You know I want you.
                </p>} />
                <Spacer />
            </Flex>
            <Flex direction="row" alignItems="flex-start">
                <Spacer />
                <MainBox title="Dell Sakimura" visualComponent={<Image src={dell} />} visualComponent2={<Image src={dell} />} textComponent={<p>
                    Pronouns: <br />
                    Voice Part: Tenor 1<br />
                    Major(s)/Minor(s): Art History<br />
                    Semester in Berkeley: 2nd<br />
                    Semester in Noteworthy: 2nd<br />
                    Interests: aeiou aeiou aeiou john madden john madden uuuuuuuuuuuuuuuu 999999999 i’m laughing for real right now football? 
                        football! john madden! john madden!<br />
                    Bio: Did you know capybaras are considered fish by the Catholic Church?
                        If you call me right now I will tell you more interesting and wacky facts. I can also tell you lies! It comes naturally to me, among other curious
                         things.
                        Call now at (248) 434-5508!
                        I haven’t felt like a real person since middle school! 18384829229 fish. Currently craving a Red Lobster cheddar biscuit. Calcium iron silicate 
                        crunch crumbhy. Baby needs snack of cleaner.
                        Every second you’re not running, I’m getting closer.<br />
                    Anything that you would like us to know? <br />
                    How was your day? 
                </p>} />
                <Spacer />
                <MainBox title="Eddie Cekici" visualComponent={<Image src={eddie} />} visualComponent2={<Image src={eddie} />} textComponent={<p>
                    Pronouns: He/Him<br />
                    Voice Part: Bass and Vocal Percussion<br />
                    Major(s)/Minor(s): Chem Bio and Stats Double Major<br />
                    Semester in Berkeley: 8th<br />
                    Semester in Noteworthy: 6th<br />
                    Interests: Being Albanian, Olive Oil, Gipsy Kings, Outer Wilds, Jon Bois, Two Words<br />
                    Bio: It is 5:15 AM as I write this and I genuinely believe my soul has the mandate of heaven. I'm like if the Jimmy Timmy Power Hour was a person. I'm like if
                     you averaged every white guy in your local mall between the ages of 16 and 24. I'm like Warren Buffet with Benjamin Button disease. I'm like if the infinite 
                     monkeys were trying to write High School Musical 2 instead. I'm Carlton Banks minus the money, plus a gambling addiction.

                        Ok time for a real bio. Hi, my name is Eddie!!! You can tell it's me because of the way I am. In lieu of actual facts about me, here are some banger tweets
                         I've made over the years:

                        "one must imagine the itsy bitsy spider happy"
                        "Dating is so easy all you have to do is send her any photo and then say 'us'"
                        "The 5 W's of owl journalism: who who who who who"
                        "Gotta be crazy to be like oh hey that guy from my cancer support group i wonder how hes doing JOHN KRAMER DID WHAT NOW"
                        "Group project partner just called me edwin how do i kill him"
                        "NOTEWORTHY? Ermmm, this is epic! Come on boys, lets do a song! *Pulls out pitch pipe*"
                        "the irony of arranging im just ken while my girlfriend sleeps soundly in my own bed is not lost on me"
                        "Gf keeps saying i have a slutty little waist"
                        "(Guy whose been in a coma for 40 years): Wow this is EXACTLY like 1984"
                        "When they say something so agoraphobic that you gotta hit them with that extrovert stare"
                        "Testing my physiognomy skills by seeing who gets off of the tirana-barcelona plane and immediately deciding their ethnicity"
                        "She Beastie on my Boys till im Intergalactic"
                        "Ok at this point the mission is quite possible"
                        "What if you were making out n they say... ALL HAIL PLANKTON... thatd be so f***ed up 😥"
                        "...i would like to remind everyone about the time i was matched against someone in a hazbin hotel shirt during a magic the gathering tournament and after i
                         beat him he proceeded to drink straight from a 2 liter bottle of pepsi"
                        "insanely proud of my sister for getting into med school but now i have an issue because she is becoming the ideal immigrant child so i think i have to Highlander
                         her"
                        "they feed us poison (college parties) so we buy their "cures" (red solo cup beer) while they suppress our medicine (nyquil from the cap)"
                        "Calling each of my asian friends with a dynastic last name a nepo baby"
                        "Me when im thinking: Wow this is just like Disco Elysium"
                        "God the costco pumpkin pie is so efficient it makes me weep tears of euphoria"
                        "Dodging the discord furry allegations"
                        "Ok wise guy lets see YOU take a crack addict"



                        Quil Squared recipe:

                        One part DayQuil
                        One part NyQuil
                        One part Olive Oil
                        One part Everclear


                        I'm like slam poetry but not bad. I'm like Abraham Lincoln if he never became president. I'm Joe Rogan with hair. I am NOT okay. I'm going to sleep.








                        I'm Phineas AND Ferb.<br />
                    Anything that you would like us to know? No.<br />
                    How was your day? You know I want you.
                </p>}/>
                <Spacer />
                <MainBox title="Ellington Chen" visualComponent={<Image src={ellington} />} visualComponent2={<Image src={ellington} />} textComponent={<p>
                    Pronouns: he/him<br />
                    Voice Part: Baritone<br />
                    Major(s)/Minor(s): In order from favorite to least favorite I'd probably go C,G,E♭, B, F#, D♭, A♭,A,A#... Take with that as you will. 
                        If I missed on of your favorites let me know in the comments below!<br />
                    Semester in Berkeley: 4th<br />
                    Semester in Noteworthy: 4th<br />
                    Interests: In order from most to least favourite I'd have to go tech, pharmaceuticals, consumer staples, materials, real estate, government bonds, 
                        APY, debt, and crypto. Wait no, switch debt and crypto. Yeah, yeah, that looks better. Hey what ever happened to NFTs? <br />
                    Bio:  In order from least favorite bits to most favorite bits: 
                        HEY HEY YA!, "So I have no idea what to write for my bio, but I’m in a funny and silly™ mood so I’ll tell some jokes and you’ll have to get 
                        the punchline from me in-person", T1cest, 1..2...3..., Albania,  me personally, that was my nickname in highschool, sooooo, I don't get it, BEEEET,
                         YOUUUUUUUUUUUUU, [redacted], COME?!, hickeys (ft. Eddie & Steph), you know I want you, *moans*, Eddie being racist, baricest, WAAAA D:<br />
                    Anything that you would like us to know? uwu<br />
                    How was your day? You know I want you.
                </p>} />
                <Spacer />
            </Flex>
            <Flex direction="row" alignItems="flex-start">
                <Spacer />
                <MainBox title="Ethan Jang" visualComponent={<Image src={ethan} />} visualComponent2={<Image src={ethanAlt} />} textComponent={<p>
                    Pronouns: He/Him/His<br />
                    Voice Part: Bass<br />
                    Major(s)/Minor(s): Undeclared (Intended Applied Math) (questionable on the intended part)<br />
                    Semester in Berkeley: 2nd<br />
                    Semester in Noteworthy: 1st<br />
                    Interests:  lore dumps in presentation format, listening to the same song for an entire day, telling myself I will start that new show today, being Korean,
                         laughing to hide the fact that I didn’t hear you, pooja what is this behavior, stan loona for clearer skin<br />
                    Bio: Oh my god vogue you caught me at a great time! I was just skinning a guinea pig I found in my piano! No time to waste (literally I have an hour to write this bio)
                    , let’s get started:

                        What is your favorite childhood memory?
                        Watching the Ghost Stories dub at 3am on a school night

                        What’s your go-to comfort food?
                        Caviar

                        How much alcohol would it take for you to sleep with the pope?
                        Secret ;)

                        Do you prefer coffee or tea?
                        Tea? As in…bubble….teabobabobabobabobaobaobaobaobaobaobaob

                        What’s your favorite hobby?
                        Serving camp realness while under mental duress

                        What’s the most adventurous thing you’ve done?
                        Being gay

                        What’s your dream job?
                        Marrying rich

                        What’s your favorite thing about yourself?
                        My humongous, throbbing, pulsating heart 

                        Do you have any hidden talents?
                        Yes, in fact I still yet have to find them, can you help me on my search? *You feel an outside force pushing your head up and down in a nodding motion*

                        How many countries have you taken a shit in?
                        3, 4 if you include the moon

                        What’s your favorite way to relax after a long day?
                        Bed

                        What’s something you’ve always wanted to try but haven’t yet?
                        Tom Welling

                        What’s your favorite type of weather?
                        Acid Rain

                        What’s the scariest movie you’ve ever seen?
                        Har har harhar har har harhar harhar har har harhar har har harhar

                        What’s your favorite thing to do in the rain?
                        Eat the rain

                        If you could witness any historical event, what would it be?
                        The space race in the perspective of a flat earther

                        Y/N (amazed): Lastly, where are you REALLY from?
                        …I didn’t want to have to be the one to tell you but…I’m your step bro, Y/N…Your parents- I mean… OUR parents they… they wanted to hide the affair between
                         our dad and jungkook to secure your place as the newest CEO of Noteworthy Evil Inc. but I just can’t stay on this toxic gossip train any longer. I need to
                          break my silence and reveal to the world the true me! 
                        *I jump Mario style and slowly start phasing out of existence, leaving you alone with my partly skinned hamster*<br />
                    Anything that you would like us to know?  freaky fishy fishy I’m so freaky fishy fishy I’m so freaky fishy fishy I’m so freaky i can tank em all freaky fishy
                     fishy I’m so freaky fishy fishy I’m so freaky fishy fishy I’m so freaky i can tank em all freaky fishy fishy I’m so freaky fishy fishy I’m so freaky fishy fishy
                      I’m so freaky i can tank em all freaky fishy fishy I’m so freaky fishy fishy I’m so freaky fishy fishy I’m so freaky i can tank em all 
 
                        *in a British accent*
                        Once I make my move, then you’re free, to check the king 😔
                        No, Ron no 😩
                        Hwhat is it? 😧
                        He’s gawing chew sacrifice himself 😭👉
                        No you KAnt 😭 there must be another way!! 😭
                        Yew wanna stop Snape from gittin that stone or nAWt 🫢
                        Harry, it’s yew that has to gowon, i KNOWet! 🥺👉
                        Not me 😣, not hermining 😓, YEW 😩👉<br />
                    How was your day? Option 14
                </p>} />
                <Spacer />
                <MainBox title="Jerry Hou" visualComponent={<Image src={jerry} />} visualComponent2={<Image src={jerry} />} textComponent={<p>
                    Pronouns: he/him<br />
                    Voice Part: Baritone<br />
                    Major(s)/Minor(s): Chemical Engineering / Theater<br />
                    Semester in Berkeley: 8th<br />
                    Semester in Noteworthy: 3rd<br />
                    Interests: Video Games, uhhhhhhh, Acapella, uhhhhhhhhh, Working Out, uhh oh and Acting<br />
                    Bio: The same one from before is good 
                        thankssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss<br />
                    Anything that you would like us to know? no<br />
                    How was your day? Yes, You know I want you.
                </p>} />
                <Spacer />
                <MainBox title="Jessica Yu" visualComponent={<Image src={jessica} />} visualComponent2={<Image src={jessicaAlt} />} textComponent={<p>
                    Pronouns: <br />
                    Voice Part: Tenor 1<br />
                    Major(s)/Minor(s): Environmental Economics and Policy, Minors: Demography, Data Science, and Music<br />
                    Semester in Berkeley: 8th<br />
                    Semester in Noteworthy: 4th<br />
                    Interests: singing, arts and crafts, casually walking, procrastinating, sleeping, visiting museums/art galleries/themed
                         parks/amusement parks, thrifting, world travel<br />
                    Bio: The first non-male and soprano to ever become part of Noteworthy (go Tenor 1). Noteworthy’s human tuner when no whistle
                         tuner is around.

                        I initially planned to write some sexy stuff, such as business ideas I legitimately have had, or courses that I want to
                         teach to disadvantaged children, or topics in pop culture that I’m interested in studying/researching from academic perspectives.
                          However, I’ve learned to realize that exposing too much about yourself to strangers is not good. So I’ve decided to shorten my 
                          self-introduction to the following line:

                        Ask me anything about pressed-on nails<br />
                    Anything that you would like us to know? <br />
                    How was your day? 
                </p>} />
                <Spacer />
            </Flex>
            <Flex direction="row" alignItems="flex-start">
                <Spacer />
                <MainBox title="Justin Wong" visualComponent={<Image src={justin} />} visualComponent2={<Image src={justin} />} textComponent={<p>
                    Pronouns: He/Him<br />
                    Voice Part: Baritone<br />
                    Major(s)/Minor(s): CS<br />
                    Semester in Berkeley: 8th<br />
                    Semester in Noteworthy: 2nd<br />
                    Interests: Skiing, Climbing, Youtube Shorts, Karaoke, Basketball<br />
                    Bio: Justin Wong is a baller. He shoots cause he's a shooter; sings because he's a singer; eats cause he's an eater. He once told me, 
                        "wow, that's cool" and was right. Legend has it that he's a real main character, or at the very least definitely a character. 
                        It was once said, "Before they met Justin Wong, the Black Eyed Peas were simply known as 'The Peas.'" <br />
                    Anything that you would like us to know? Hi mom<br />
                    How was your day? Oh, sing it now!
                </p>} />
                <Spacer />
                <MainBox title="Kian Chou" visualComponent={<Image src={kian} />} visualComponent2={<Image src={kian} />} textComponent={<p>
                    Pronouns: he/him<br />
                    Voice Part: Bass<br />
                    Major(s)/Minor(s): MEB<br />
                    Semester in Berkeley: 2nd<br />
                    Semester in Noteworthy: 2nd<br />
                    Interests: my girlfriend, kpop, gym, premed, cookie run kingdom, webtoons, birds aren't real<br />
                    Bio: Kian (pronounced like the pepper), a member of the shadowy "mega evil brigade," keeps his true goals shrouded in mystery. While
                     some whisper of world domination, others suspect a more nefarious plot involving...birds? Is Kian a misunderstood environmentalist or
                      a cunning avian overlord? Only time will tell!

                        In his free time, Kian enjoys a variety of musical genres, including kpop and edm. When not plotting (or protecting the skies from
                         feathered robotic fiends), you can find Kian at the gym, playing cookie run, hanging out with his girlfriend, calling his girlfriend,
                          or sleeping. One thing is certain: Kian's presence guarantees an element of the unexpected, so keep your eyes peeled and your tinfoil
                           hats handy!

                        Noteworthy Achievements:

                        - Successfully infiltrated Noteworthy for two semesters without revealing his true identity
                        - Maintains an astounding record of mega bopping during vocal rehearsals (or is he using some sort of mind control device?)
                        - Ranked highest for "bird" government tracking chips collected
                        - Has a low spice tolerance despite having a name pronounced like a pepper

                        Questions Kian Would Like Answered:

                        - Are birds real?
                        - Do I have Alzheimer's?
                        - Was I crazy once?
                        - Hotel? 
                        - Do I have Alzheimer's?

                        Questions Kian Would Like Answered:

                        - Do I have Alzheimer's?

                        Questions Kian Would Like Answered:

                        - Do I have Alzheimer's?

                        Kian Chou

                        Voice Part: Bass

                        Semester in Noteworthy: 2nd

                        Semester in Berkeley: 2nd

                        Major: Molecular Environmental Biology

                        Allegiance: Mega Evil Brigade (Purpose to be Determined)

                        Interests: my girlfriend, kpop, gym, premed, cookie run kingdom, webtoons, birds aren't real

                        https://www.youtube.com/watch?v=yO28Z5_Eyls<br />
                    Anything that you would like us to know? you know i want you you know i want you you know i want 
                        you you know i want you you know i want you you know i want you you know i want you you know 
                        i want you you know i want you you know i want you you know i want you you know i want you you
                         know i want you you know i want you you know i want you you know i want you you know i want you
                          you know i want you you know i want you you know i want you you know i want you you know i want
                           you you know i want you you know i want you you know i want you you know i want you you know
                            i want you you know i want you you know i want you you know i want you you know i want you you
                             know i want you you know i want you you know i want you you know i want you you know i want you
                              you know i want you you know i want you you know i want you you know i want you you know i want
                               you you know i want you you know i want you you know i want you you know i want you you know
                                i want you you know i want you you know i want you you know i want you you know i want you you
                                 know i want you you know i want you you know i want you you know i want you you know i want
                                  you you know i want you you know i want you you know i want you you know i want you you know
                                   i want you you know i want you you know i want you you know i want you you know i want you
                                    you know i want you you know i want you you know i want you you know i want you you know i
                                     want you you know i want you you know i want you you know i want you you know i want you
                                      you know i want you you know i want you you know i want you you know i want you you know
                                       i want you you know i want you you know i want you you know i want you you know i want
                                        you you know i want you you know i want you you know i want you you know i want you you
                                         know i want you you know i want you you know i want you you know i want you you know
                                          i want you <br />
                    How was your day? Oh, sing it now!, All around the world!, You know I want you.
                </p>} />
                <Spacer />
                <MainBox title="Madlen Jalalyan" visualComponent={<Image src={madlen} />} visualComponent2={<Image src={madlen} />} textComponent={<p>
                    Pronouns: she/her<br />
                    Voice Part: Tenor 1<br />
                    Major(s)/Minor(s): English, Slavic Languages and Literatures (major)<br />
                    Semester in Berkeley: 6th<br />
                    Semester in Noteworthy: 1st<br />
                    Interests: singing, cooking, reading, writing, being Armenian, plotting the demise of my enemies, ending things on a cliffhanger,
                         Sherlock Holmes, solving escape room puzzles<br />
                    Bio:  When people find out I’m an English major, they immediately assume I’m an amazing story teller. But I’m so much more than that!
                     An absolute menace during rage cage, a cinnamon roll that would actually kill you, a chronic overthinker/daydreamer, a holy mother, your
                      personal close-reading machine that will illuminate things you didn’t know about yourself (and look pretty doing it).
                        
                        But now. Let me tell you a little story about myself. I’m Madlen, (not Madeleine, or Madelyn, and definitely not Madlyn). Bet you haven’t
                         seen that spelling before... Why is my name spelled like that, you may wonder? Well, it all started when my mom met my dad, and they fell
                          in love and they had me. It was at this time… after casting a single gaze upon me that they knew…
                        …
                        …
                        Cliffhanger! Tune in next week for the update.
                        …
                        …
                        Wait, what do you mean there won’t be an update? NOOOOOOOOO…<br />
                    Anything that you would like us to know? Excited for the website! (I don’t know what else to say here!)<br />
                    How was your day? Oh, sing it now!, All around the world!, What the hell does that mean, Option 14, true, false, wehhhh, You know I want you.
                </p>} />
                <Spacer />
            </Flex>
            <Flex direction="row" alignItems="flex-start">
                <Spacer />
                <MainBox title="Maya Rotenburg" visualComponent={<Image src={maya} />} visualComponent2={<Image src={maya} />} textComponent={<p>
                    Pronouns: she/her<br />
                    Voice Part: Tenor 1<br />
                    Major(s)/Minor(s): Data Science<br />
                    Semester in Berkeley: 6th<br />
                    Semester in Noteworthy: 2nd<br />
                    Interests: t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes,
                         and my BRITA<br />
                    Bio:  So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data
                     and pandas (animal) and python (animal) and machines (animal) and learning (animal).
 
                        https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY<br />
                    Anything that you would like us to know? sup.<br />
                    How was your day? Oh, sing it now!, You know I want you.
                </p>} />
                <Spacer />
                <MainBox title="Stephanus Yang" visualComponent={<Image src={stephanusEdit} />} visualComponent2={<Image src={stephanusEdit} />} textComponent={<p>
                    Pronouns: he/him<br />
                    Voice Part: Tenor 2<br />
                    Major(s)/Minor(s): Chemistry<br />
                    Semester in Berkeley: 4th<br />
                    Semester in Noteworthy: 4th<br />
                    Interests: Ellington Chen<br />
                    Bio:  Have you ever asked AI to generate an image of a really really good-looking teenage Taiwanese male UC Berkeley student who is also in acappella?
                     Well if you have, then you don't need to read the rest of my bio, because the image you saw was indeed an image of me. Now some of you might argue that
                      there are actually no good-looking individuals on the campus of this school, and every student just has so-called "Berkeley Goggles". I would agree with
                       you... if I didn't look in the mirror every morning. And hey, since you already bothered to come all the way to this website, scroll down to find the
                        most fit-looking young man on this page, and begin reading this bio, I thought I would share a special treat with you. I have decided to finally publish
                         my highly curated highly personalized day-to-day routines to live by in order to look almost as good as me.
     
                        1. Be Taiwanese. I recommend looking into RCTA if necessary.
                        2. Dye your hair. It doesn't have to be the ones on your head.
                        3. Spend at least 4 hours a day with Ellington. Doing what? That I won't share.<br />
                    Anything that you would like us to know?  I was writing this bio and looked up some examples and they were so funny they got me dead 2 3 4.
     
                        If anyone has free meal swipes please donate them to me<br />
                    How was your day? Oh, sing it now!, wehhhh, You know I want you.
                </p>} />
                <Spacer />
                <MainBox title="Tom Guan" visualComponent={<Image src={tom} />} visualComponent2={<Image src={tom} />} textComponent={<p>
                    Pronouns: he/him<br />
                    Voice Part: Baritone<br />
                    Major(s)/Minor(s): Psychology<br />
                    Semester in Berkeley: 8th<br />
                    Semester in Noteworthy: 4th<br />
                    Interests: sports, working out, going flat, fixed interest, compound interest, playing video games, being sober at parties, kian chou,
                     ellington chen, eddie cekici, bari sectionals, WEEEEEEEEEEEEEHHHHH <br />
                    Bio: So people (rightfully) say that I talk about myself too much, so I'll talk about every other person in this lovely group! i dont really
                     know their names very well though, so i'll give describing features about their personality and whatnot.

                        1. listens to me yap endlessly, most boomer boomer, t1s say they're ugly, one of the biggest scandals in american history
                        2. absent parent that we all love, the mouse to my cat, eternally sick and busy, lives on a pretty street
                        3. teddy bear, strong desire for "you", did someone say nice?, day 1 chiller, day 100 lover uwu
                        4. "where'd [name] go?", direct and blunt, noteworthy’s trailblazer
                        5. Goat ragecager, most severe case of fomo in nw, quick-witted, “you picked THAT in customs???”
                        6. blue paper, true day 1, brother that i wish i had, lover that i have, 600 point gap is crazy, sweetheart but rarely shows it
                        7. loves preaching, man (not a muppet), giver of great hugs, *joins nw* “wait, they actually joined??” 
                        8. most hater and supporter, limps, always there (minus midterm season), best banter, a king, 
                        9.  7 years ago, old parent gang, social liaison between old and new, leaving/left to get 牛乳, loves the color mint
                        10. nw on the side, darkest hair in nw, most chaotic evil, always brings positive vibes, trying to steal my man :(
                        11. chomp, intellectual crackhead, pop culture encyclopedia with some pages missing, computer 
                        12. ADHD (awesome dad, high dAmount of Talking), did it, smoochies, old but not, nw's rock
                        13. literally uc berkeley, iconic smile, super kind but with a mean twang, aspiring alcoholic, undying hatred towards the vests  
                        14. meanest nice person in nw, gee enabler, always witnesses me doing stupid stuff and silently judges me
                        15. least overconfident ragecager, prolly has no panties anymore, photographer goat, has a sick bike 
                        16. Goat ragecager (drinks all the cups), sweet and spicy (super kind, but sassy), chorale to nw pipeline goes strong 
                        17. most zoomer boomer, also the absent parent that we all love, most bro-y in nw, fire on the aux  
                        18. barely, *throws it back while crying*, most boomer zoomer, super caring, makes me wish i had a younger sibling 

                        If you made it this far... of course I actually know all of these people by name! here's the answer key if you're interested! 
                        (https://docs.google.com/spreadsheets/d/1-z0StcsrOEBwbYJ1b6dYT0SiaZGe32NioXSbjEd8no0/edit?usp=sharing) 

                        To the first person to correctly guess all 18 people, I'll buy you boba :)<br />
                    Anything that you would like us to know? media-comm best comm<br />
                    How was your day?  You know I want you.
                </p>} />
                <Spacer />
            </Flex>
        </Flex>
        </>
    )
}


function MainBox(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
        <Box w='30vw'
            maxH='60vh'
            minH='60vh'
                bg="rgba(0, 0, 0, 0.2)"
                color="black"
                borderRadius="10px"
                p={2}
            >
                <BoxTitle title={props.title} />
                <Center boxSize='100%' onClick={() => setModalIsOpen(true)}>{props.visualComponent}</Center>
            </Box>

        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <ImageWithCaptionAndText title={props.title} textComponent={props.textComponent} visualComponent={props.visualComponent2} />
        </Modal>
        </>
    )
}

function BoxTitle(props) {
    return (
        <>
        <Text fontSize={40}
        fontWeight={700}
        textAlign="center"
        m={0}
        fontFamily="Lobster"
        >
            {props.title}
        </Text>
        </>
    )
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #ccc;
  background-color: rgb(21, 29, 40); /* Set the background color to navy */
  color: white; /* Set the font color to white */
  font-family: Century Gothic, sans-serif; /* Use a different font */
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-right: 16px;
  text-align: center; /* Center the caption under the image */
`;

const Caption = styled.p`
  font-size: 32px;
  color: #fff;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const TextContent = styled.p`
  font-size: 16px;
  color: #fff;
`;
  
function ImageWithCaptionAndText(props) {
return (
    <Container>
    <ImageWrapper>
        {props.visualComponent}
        <Caption>{props.title}</Caption>
    </ImageWrapper>
    <TextWrapper>
        <TextContent>
        {props.textComponent}
        </TextContent>
    </TextWrapper>
    </Container>
    );
}


export default Members