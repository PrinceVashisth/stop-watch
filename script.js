// sounds
let pop = new Audio("pop.mp3");
// taking all the selectors from HTML
const keyboard = document.querySelector('.keyboard'); // keyboard
const time = document.querySelector('.input #time');//start buttun
const first = document.querySelectorAll('.keyboard .first');//first row
const second = document.querySelector('.keyboard .second');//second row
const third = document.querySelector('.keyboard .third');//third row
const input = document.querySelector(".input");  
const Text=document.querySelector(".input .checking"); // the field which shows what we type
const para = document.querySelector('.contentTODisplay');  //paragraphs to display randomly 
const points =document.querySelector(".Show_Result .points");  //result points
const starRating =document.querySelector(".Show_Result .starRating"); // rating in stars
let StartWord = 0,LastWord=0,Score = 0;

// making array of strings to taking random paragraphs
const paragraphs = [
      "this is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really be considered a paragraph but just a series of run on sentences this should help you get faster at typing as im trying not to use too many difficult words in it although i think that i might start making it hard by including some more difficult letters I'm typing pretty quickly so forgive me for any mistakes i think that i will not just tell you a story about the time i went to the zoo and found a monkey and a fox playing together they were so cute and i think that they were not supposed to be in the same cage but they",
      "trying to make a wise , good choice when thinking about what kinds of careers might be best for you is a hard thing to do . your future may very well depend on the ways you go about finding the best job openings for you in the world of work . some people will feel that there is one and only one job in the world for them . hard thinking and a lot of hard work will help them find the one job that is best for them. Jobs are there for those with skills and a good work ethic. Many new young artists in the upper new england states are famous around the world as leaders in new american art. these fine artists are very good in their chosen fields and are willing to share their many talents by teaching others.",
      " hello my name is prince vashisth and i am student of second year third semester in computer science branch and this time you are using my typing keyboard and this is my third project that i made thanks for using it and increase your skills while using it thanksyou ",
      "scolding is something common in student life . Being a naughty boy , i am always scolded by my parents . but one day i was severely scolded by my english teacher . she infect teaches well. but that day , i could not resist the temptation that an adventure of nancy drew offered .",
      "bitcoin is an electronic currency created back in january 2009 . it is known to be decentralized electronic cash that does not rely on banks . it is possible to send from one user to another on the bitcoin blockchain network with the necessity for mediators . it is primarily used for sending or receiving cash through the internet even to the strangers .",
      "bringing business stability and maintaining full employment conditions another main objective of taxation is to bring about business stability and maintain full employment conditions. Low rate of taxation during a business depression shall accelerate more income to the people and help in raising demand and, thus, revive business activity . On the other hand, high rates of taxes and additional taxes may be useful to check inflationary pressure on prices.",
      "technology refers to the practical application of scientific knowledge for a purpose . it also includes the capability and skills required to apply the knowledge . technology enhances the usefulness of goods and services in a safe manner . It aims at creating value . technology can be both material and non material. technology includes instruments, tools , machines , and other devices that benefit human life . it may include simple items such as clothing , zip , housing, and complex items such as airplanes, robots, etc .",
      "technology refers to the practical application of scientific knowledge for a purpose . it also includes the capability and skills required to apply the knowledge . technology enhances the usefulness of goods and services in a safe manner . it aims at creating value . technology can be both material and non material. technology includes instruments, tools , machines , and other devices that benefit human life . it may include simple items such as clothing , zip , housing, and complex items such as airplanes, robots, etc .",
      "avoid using your debit card for any online purchase or for something which is expensive . you will find it much easier to dispute a charge when you use your credit card . the advantages and acceptability of credit cards from the customers view point vary from that of a banker or member establishments . to the card holder The smaland attractive plastic credit cards are very easy to carry and they shopping, without the burden of carrying wards of currency notes with its inherent risks, inconveniences and dangers. Numbers of fringe benefits are available to the credit card holder .",
      "in this fast paced world , time is money and everything needs to be done in the shortest time possible . you see that several job postings include a minimum typing speed in terms of words per minute in their list of requirements . with the widespread use of computers , almost everyone knows how to type . the real question is how fast you can type, which is measured by taking a standard wpm test. it is not only the typing speed , accuracy also matters.",
      "you do not need to worry much if you have not done great on a typing speed test just yet . only a few types of jobs insist on applicants taking a wpm test and achieving a high score in the range of 90 100 words per minute . data entry operator typing is the primary task in this role . the data entry operator needs to enter vast amounts of data into the computer database . examples of this data are stock inventory and customer details .",
      "secretary or receptionist A person working in this role needs to fill out forms , take dictation from bosses and write minutes of meetings . bosses are busy people and do not have much time or patience for slow typists . medical transcription typing test wpm speed definitely matters in this job because you are converting audio content into textual form . However , accuracy takes precedence because of the critical nature of the medical records of patients .",
      "globalisation , The sudden increase in the exchange of people , knowledge , trade and capital in the last two decades , has created an inter connected web comprising countries across the globe . interestingly , as countries embrace globalisation and open up to each other , the desire to aggressively protect their own national interests , captured by the term jingoism , also gains currency . the 21 century is a century of movement and fluidity .",
      "education and empowerment go hand in hand . If we are to empower girls , it is imperative to give women access to education . it is no coincidence that an improvement in the condition of women has coincided with an increase in the literacy rates of women to more than 50 per cent today . it is also important , at the same time , to sensitise the men of the society on gender issues so that the existing gender bias can be wiped off .",
      "however , globalisation also stokes fears of losing out in the face of competition from other countries , which , in turn , fuels jingoistic feelings in the people . there is a sense of insecurity in such countries , which begins to reflect in their foreign policy marked by protectionism . in their attempt to safeguard their national interests and shield the country industries , people especially the unemployed and resources , they tend to adopt measures such as higher tariffs on imported goods , incentives to firms who employ natives, restricting influx of migrants and so on.",
      "health is the normal and sound state of the body . This is a great source of peace and happiness . health refers to a state of sound mind and physically fit body free from any disorder , sickness or ailment . In simple words , health refers to the physical , emotional and psychological well being of a person . hygiene refers to the good practices that prevent diseases and leads to good health, especially through cleanliness, proper sewage disposal, and supply of safe drinking water .",
      "the indian constitution has ensured the independence of the judiciary through a number of measures. The legislature is not involved in the process of appointment of judges . thus , it was believed that party politics would not play a role in the process of appointments . in order to be appointed as a judge, a person must have experience as a lawyer and or must be well versed in law .",
      "we believe that an empowered woman can change a lot in the society . unlike other women empowerment programs , we believe that money as an energy is one of the most powerful empowerment tools . we believe in practical steps to create income for women , who are capable and intelligent and willing to work , however due to various reasons are unable to do it today . The reasons could be varied for various women, some women could be deprived of these opportunities because their men don't want them to work , the others may be restricted due to family pressures or peer pressures .",
      "the road to success is not smooth but fraught with hurdles , unpredictability , dangers and risk . The high risk of failure , especially with new initiatives , can dishearten the most spirited of people . As a result , people tend to lose their interest and focus and ultimately quit . while setting out on a new project or a business venture , commitment is required to see the project or business venture through .",
      "a goal which cannot sustain your interest for a long time presents a problem because it is very difficult to retain the commitment for it . it is, therefore , important that you set your goals carefully and systematically so that you do not have to regret later . if the work is such that it itself sustains your interests , then you will enjoy doing it in-spite of the difficulties and never feel bored of it . failures can crush the positivity in a person .",
      "single minded focus , determination and self belief are qualities of a winner . a winner turns every hurdle into opportunities as opposed to an ordinary person who gets intimidated by the slightest of troubles and tends to give up easily at the first instance . the best way of dealing with a tough situation which tests your spirit and motivational levels is to not complicate things and to keep it simple .",
      "the olympic games first began in ancient greece . they were of religious significance , being held in honor of zeus in olympia , greece . the games were held every four years with representatives from the various city states competing in athletic competitions and combat sports like horse racing , and wrestling . the games were supposed to be a sort of peace or truce between the city states . it was called the olympic peace by the grecians.The olympic games are known as the worlds foremost athletic competition . Over 200 nations participate in this event that happens once in 4 years.",
      "bill gates , steve Jobs , sachin tendulkar and tiger woods have become successful not by luck or destiny but by sheer hard work and the will to be the best . all successful people are ordinary beginners with some talent . they work hard on their talents over a period of time before they taste success . there can be no substitute for hard work . in any walk of life , be it professional or personal , in any profession , be it business or sports , hard work always produces positive results .",
      "talent is never enough . with few exceptions the best players are the hard workers . it is rightly said that champions are not born , they are made . if talent alone could guarantee success over a long period of time , all talented sports persons would not waste their sweat , training hard to be the best and keep improving . the best achievers in sports , people who have shattered records"
    ];

    //generate random number for indexing of string array
    TextToDisplay =()=>{
      const numbers = Math.floor(Math.random()*24);
      para.innerHTML=paragraphs[numbers];
    }

//applying listening events on input block that show the word you write
let t1,t2;
input.addEventListener(("click"),(val)=>{
  if(val.target.innerHTML == "Start"){   //if we click on start
    Score = 0;
    let min = 0;let sec = 0;
    TextToDisplay();
   t1 = setInterval(() => {
       time.innerHTML = min +":"+sec;
       sec=sec+1;
       if(sec == 60){
        clearInterval(t1);
        Text.innerHTML = "";
        time.innerHTML = "Re Test";
        points.innerHTML = Score;
       }
      }, 1000);
  }
  if(val.target.innerHTML == "Re Test"){    // After test is given and we want to give again
    let min = 0;let sec = 0;
    Text.innerHTML = "";
    LastWord = 0;
    Score = 0;
    TextToDisplay();
   t2 = setInterval(() => {
       time.innerHTML = min +":"+sec;
       sec=sec+1;
       if(sec == 60){
        clearInterval(t2);
        Text.innerHTML = "";
        time.innerHTML = "Re Test";
        points.innerHTML = Score;
       }
      }, 1000);
  }
  if(val.target.innerHTML == "ReSet Text"){   //reset the random paragraphs
    TextToDisplay();
    Score = 0;
    LastWord = 0;
  }
})
// Applying Listening Events on Keyboard
let check=true;
let id;
let number = 2;
keyboard.addEventListener(("click"),(value)=>{
let l = ((value.target.innerHTML[0] >='a'&& value.target.innerHTML[0] <='z')||(value.target.innerHTML[0] >='A' && value.target.innerHTML[0] <='Z' )||(value.target.innerHTML>=0 && value.target.innerHTML<=9) || value.target.innerHTML==',') && value.target.innerHTML!='CapsLock' && value.target.innerHTML!='Enter' && value.target.innerHTML!='Shift' && value.target.innerHTML!='Tab' && value.target.innerHTML!='SPACE BAR';
// conditional statements for perticular functionality
if(value.target.innerHTML == "CapsLock"){
   if(number%2==0){
    value.target.style.color = "black"; 
    number=number+1;
   }else{
    value.target.style.color ="white";
    number = number+1;
   }
}
else if(l){               //taking single single character in input
  pop.play();
  Text.innerHTML+=value.target.innerHTML;
  if(value.target.innerHTML != para.innerHTML[LastWord]){
    
    Text.style.color = "red";
  }else{
    Text.style.color = "green";
  }
  LastWord=LastWord+1;
}

// deleting a last character
  else if(value.target.innerHTML == '*' && Text.textContent.length>0){
    Text.textContent=Text.textContent.substring(0, (Text.textContent.length - 1));
    LastWord=LastWord-1;
  } 
           
  //  changing color of background in a click
   else if((!l && check) && value.target.innerHTML!='CapsLock' && value.target.innerHTML!='Enter' && value.target.innerHTML!='Shift' && value.target.innerHTML!='Tab' && value.target.innerHTML!='SPACE BAR' ){
     check = false;
     id = setInterval(() => {
        const Red =Math.floor(Math.random()*256) ;
        const Green =Math.floor(Math.random()*256) ;
        const Blue = Math.floor(Math.random()*256) ;
        const Colorvalue = `rgb(${Red},${Green},${Blue})`;
           keyboard.style.background = Colorvalue; 
        const clr =`linear-Gradient(to right,rgb(${Red},${Green},${Blue}) 0%,rgb(${Blue},${Green},${Red}) 20%,rgb(${Red},${Blue},${Green}) 30%,rgb(${Red},${Green},${Green}) 60%,rgb(${Red},${Blue},${Blue}) 80%,rgb(${Green},${Red},${Red}) 100%)`;  
          keyboard.style.backgroundImage =clr;   
       }, 1000);
    }

    else if(value.target.innerHTML=='SPACE BAR'){
        if(Text.style.color =="green" && para.innerHTML[LastWord] ==" "){//
          Score = Score +1;
        }
        //if our word is incorrect then sentence will increases till it not point next word
        else{
          while (para.innerHTML[LastWord] !=" "){
            LastWord = LastWord+1;
          }
        }
        LastWord = LastWord+1;
      Text.innerHTML="";
    }

    else if(value.target.innerHTML=='Enter'){
      points.innerHTML = Score;
      LastWord = 0;Score=0;
      Text.innerHTML="";
      clearInterval(t1);
      clearInterval(t2);
      time.innerHTML ="Start";
      Text.style.pointerEvents="none";
    }    
    // clear the changing background
    else{
      clearInterval(id);
      check=true;
    }
})      