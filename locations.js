var locations = {
    "start": {
        "buttons": "<button id='choice1'>Choice 1</button><button id='choice2'>Choice 2</button><button id='choice3'ss>Choice 3</button>",
        "description": "You wake up on a street. <br> This is where you have been living for a long time now. <br> You are in a dark alley, you are disorientated and there <br> seems to be no escape. <q>Hand over your money or else</q> A rough<br> voice says from behind you. You can’t see who it is as they are <br> behind you holding a knife to your back.<br><br><br><br><br><br><br>",
        "image": "",
        "place":"<img src='images/Places/ally.png'>",
        "buttonchoice":{
        "choice1": "<button id='choice1'>Turn around</button>"
        },
        "directions": {
            "choice1": "ally"
        }
    },
    "ally":{
        "description": "You go to turn around but feel<br> a sharp jab to your back. <q>Dont cha move or yall get it!</q> The hoarse voice says.",
        "image": "",
        "place":"<img src='images/Places/ally.png'>",
        "buttonchoice":{
            "choice1": "<button id='choice1'>turn around</button>",
            "choice2": "<button id='choice2'>don't turn</button>"
        },
        "directions": {
            "choice1": "allyBad1",
            "choice2": "allyGood1"
        }
    },
    "allyBad1":{
        "description": "You turn around and look at the<br> person behind you, they have red bloodshot eyes and look like a <br>maniac. They start laughing hysterically. <q>Shoulda listened <br>to me!</q> They shout manically, you look down and see the knife has gone<br> straight through your chest. You bleed out.",
        "image": "<img src='images/chars/creepyguyface.png'>",
        "place":"<img src='images/Places/ally.png'>",
        "buttonchoice":{
            "choice1": "<button id='choice1'>die</button>"
        },
        "directions":{
            "choice1": "deathOne"
        }
    },
    "deathOne":{
        "description": "You look around and it is dark.<br> You see a strange figure in front of you. <q>You have died</q><br> it whispers out in a hoarse voice. What will you do now?",
        "image": "<img src='images/chars/MADNEONDEATH.png'>",
        "place":"<img src='images/Places/hell.png'>",
        "buttonchoice":{
            "choice1": "<button id='choice1'>Restart</button>"
        },
        "directions":{
            "choice1": "start"
        }
    },
    "allyGood1":{
        "description": "Suddenly there is a loud grunt <br>coming from behind you and then a load smacking sound like a bag of <br>potatoes being dropped to the ground. Do you turn around?",
        "image": "",
        "place":"<img src='images/Places/ally.png'>",
        "buttonchoice":{
            "choice1":"<button id='choice1'>don't turn around</button>",
            "choice2":"<button id='choice2'>turn around</button>"
        },
        "directions":{
            "choice1": "allyescape",
            "choice2": "allyGood2"
        }
    },
    "allyescape":{
        "description": "You don't turn around, instead<br> you look for a way out over the alleyway. You see a couple of boxes <br>stacked up against one side of the wall. If you run straight<br> at it you might stand a chance of grabbing a hold of the ladder attached to the<br> building above the alley.",
        "image":"",
        "place":"<img src='images/Places/ally.png'>",
        "buttonchoice":{
            "choice1":"<button id='choice1'>run at boxes</button>",
            "choice2": "<button id='choice2'>turn around</button>"
        },
        "directions":{
            "choice1": "join",
            "choice2": "allyGood2"
        }
    },
    "allyGood2":{
        "description":"You turn around to see what happened.<q>Are you ok?</q> a voice asks.",
        "image": "<img src='images/chars/assassin.png'>",
        "place":"<img src='images/Places/ally.png'>",
        "buttonchoice":{
            "choice1": "<button id='choice1'>Nod your head</button>",
            "choice2": "<button id='choice2'>Shake your head</button>"            
        },
        "directions":{
            "choice1": "nod",
            "choice2": "wimp",
        }},
    "nod":{
        "description":"You nod your head unphased from <br>the previous encounter as this tended to happen a lot while you have<br> been living on the streets. The mysterious person studies you<br> for a second trying to figure you out. She then nods to herself, looking as<br> if she had just made up her mind about something.<br> <q>You are coming with me!</q> She said.",
        "image": "<img src='images/chars/assassin.png'>",
        "place":"<img src='images/Places/ally.png'>",
        "buttonchoice":{
            "choice1":"<button id='choice1'>Go with her</button>",
            "choice2":"<button id='choice1'>Do not go with her</button>",
        },
        "directions":{
            "choice1":"assassin",
            "choice2":"wimp",
        }},
    "wimp":{
        "description": "You shake your head in fear.<br> The person looks you over to make sure you are not hurt and offers to walk<br> you to where you need to be. You ask if you can go with them,<br> they say that their line of work is not for you and gives you a thin piece<br> of metal on a chain <q>put this around your neck<br> and if you ever need help, snap the piece of metal and I will come.</q><br>(+1 ally)<br>(+1 item)",
        "image": "<img src='images/chars/assassin.png'>",
        "place":"<img src='images/Places/ally.png'>",
        "items":{
            "metalthing": "You are given a metal necklace from the person."

        },
        "buttonchoice":{
            "choice1": "<button id='choice1'>TO BE CONTINUED</button>",
            "choice2": "<button id='choice2'>TO BE CONTINUED</button>" 
    },
        "directions":{
            "choice1": "start",
            "choice2":"start"
        }
        },
    "assassin":{
        "description":"She takes you to a part of the city you try to avoid,<br> it has a ton of creeps who hide down back alleys and have a horrid look in their eyes.<br> You look up at her and ask where you are going. She just tells you to stay close.<br> When she finally stops you take a look at your surroundings.<br> She brought you into an old house that looks like it has been abandoned for a long time. <br>It is quite dark inside and you can’t see much. She turns to face you.<br> <q>If you pass this test, I will be able to train you and make sure you don’t end up in that situation again.<br> I can tell you live on the streets, don’t try to deny it. I want to help you but there is only so much I can do.</q><br> You look up at her confused. She could have told you what you were walking into.",
         "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/ally.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>Ask what the test is</button>",
            "choice2": "<button id='choice2'>Leave</button>",},
            "directions":{
                "choice1": "morals",
                "choice2": "leave",
            }
    },
    "morals":{
        "description": "You take a deep breath. You can’t go back to the streets,<br> no matter what. It was horrible and you aren’t sure you would be able to survive much longer out there.<br> You are surprised you lasted as long as you did before you ended up with a knife at your back.<br> <q>What is the test?</q> You ask. <q>It is simple</q> she replies.<br> <q>There are three people in the next room. One of them is a traitor, one of them is an assassin and one of them is a normal person.<br> You must figure out which is which.  You may ask them one question.</q>",
        "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>Do the test</button>",
            "choice2": "<button id='choice2'>Leave</button>",},
            "directions":{
                "choice1": "traitor",
                "choice2": "leave",
            }
    },
    "traitor":{
        "description": "You decide that you have come this far, you might as well follow through.<br> You slowly walk up to the people with bags over their heads. What question will you ask?",
        "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>Ask Question</button>",
            "choice2": "<button id='choice2'>Leave</button>",},
            "directions":{
                "choice1": "question",
                "choice2": "leave",
            }
    },
    "question":{
        "description":"You ask the question to the first person.<br> They just give a generic answer that wasn’t worth your time to pay attention to.<br> The next person pauses for a second as if contemplating all the different things they could answer with.<br> They then just say a single word. The last person laughs. You freeze. You know that laugh.<br> You turn to the woman behind you and stare at her. Then turn back around to the last person again. Maybe you are mistaken.<br> You go closer to the last person on the ground and ask them to answer the question.<br> <q>What do you want me to say love? What is the correct answer for a ‘normal person’?</q><br> They chuckle darkly to themselves putting air quotes around normal person.<br> It was them; it was 100% them no denying it. The person who had held a knife to your back barely any time ago.",
         "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>Ask why the person is there</button>",
            "choice2": "<button id='choice2'>Figure out the test</button>",
            "choice3": "<button id='choice3'>Leave</button>"},
            "directions":{
                "choice1": "askwhy",
                "choice2": "lies",
                "choice3": "leave",
            }
    },
    "askwhy":{
        "description":"TO BE CONTINUED",
         "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>TO BE CONTINUED</button>",
            "choice2": "<button id='choice2'>TO BE CONTINUED</button>",
            "choice3": "<button id='choice3'>TO BE CONTINUED</button>"},
            "directions":{
                "choice1": "start",
                "choice2": "start",
                "choice3": "start",
            }
    },
    "lies":{
        "description":"You run through all of their answers in your head again. Trying to work out who could be the assassin and who could be the traitor. It had to be the last two, you are just unsure which was which. You turn back to the woman. <q>The last person is the traitor, and the second person is the assassin.</q> You state to her trying your best to be confident. She looks at you her eyes gleaming in the dim light. <q>Who said there was only one assassin?</q> She asked. You look at her confused. <q>Well, you did</q>. <q>Who says I do not lie, don’t believe everything someone tells you, ask questions, work things out, but never take someone at their word. Especially when they are a stranger. Trust is to be earnt</q>. You look at her and look back at the people in front of you. Looking around the room you notice that there are cracks in the wooden wall where slight light peaks through from outdoors. Looking back over at the people on the floor you study their body language. None of them look scared, no one is shaking, they all are holding themselves with straight backs. You make up your mind.",
        "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>They are all assassins</button>",
            "choice2": "<button id='choice2'>The last two are assassins</button>",
            "choice3": "<button id='choice3'>Leave</button>"},
            "directions":{
                "choice1": "lessonlearnt",
                "choice2": "fail",
                "choice3": "leave",
            }
    },
    "fail":{
        "description":"TO BE CONTINUED",
        "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>TO BE CONTINUED</button>",
            "choice2": "<button id='choice2'>TO BE CONTINUED</button>",
            "choice3": "<button id='choice3'>Leave</button>"},
            "directions":{
                "choice1": "start",
                "choice2": "start",
                "choice3": "start",
            }
    },
    "lessonlearnt":{
        "description": "You turn back to her more confident than before having taken in your surroundings and actually paying attention. <q>They are all assassins</q> you state. She smiles. <q>I knew you had a talent.</q> She said. <q>You passed the test</q>. You grin a wide smile, that then faulters when you realise that you don’t know what this test was for. <q>What did I just test for?</q> You ask slightly cautious. <q>Good, you are already taking my advice.<q> She says proudly. <q>If you chose to accept, you can become an assassin. We will provide you with somewhere to sleep, food, water and clothes.</q> You think about this offer for a second.",
        "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>I don’t want to kill people</button>",
            "choice2": "<button id='choice2'>Join their ranks</button>",
            "choice3": "<button id='choice3'>Leave</button>"},
            "directions":{
                "choice1": "dontwannakill",
                "choice2": "join",
                "choice3": "leave",
            }
    },
    "dontwannakill":{
        "description":"You quickly realise what joining them would mean. Could you take another life? Could you be in that situation and not freeze? <q>I don’t want to kill people</q> You whisper scared of her reaction. Her eyes soften and she walks towards you. <q>Who said anything about you killing?</q> She asked you with a raised eyebrow. <q>Being an assassin isn’t just about killing. There is infiltration, information gathering, people who just cook and clean at the camp, blacksmiths and tons of other things. I took you here because I want you to be safe. However, if you do not feel comfortable being an assassin I shall not force you</q>.",
        "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>Join their ranks</button>",
            "choice2": "<button id='choice2'>Leave</button>",},
            "directions":{
                "choice1": "join",
                "choice2": "leave",
            }
    },   
    "join":{
        "description": "TO BE CONTINUED",
        "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>TO BE CONTINUED</button>",
            "choice2": "<button id='choice2'>TO BE CONTINUED</button>",},
            "directions":{
                "choice1": "start",
                "choice2": "start",
            }
    },
    "leave":{
        "description": "TO BE CONTINUED",
        "image": "<img src='images/chars/assassin.png'>",
         "place":"<img src='images/Places/thetesttrytwo.png'>",
         "buttonchoice":{
            "choice1": "<button id='choice1'>TO BE CONTINUED</button>",
            "choice2": "<button id='choice2'>TO BE CONTINUED</button>",},
            "directions":{
                "choice1": "start",
                "choice2": "start",
            }
    },
    }