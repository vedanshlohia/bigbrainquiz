class Form {

  constructor() {
    this.element = createElement("h4", "NAME : ")
    this.element.position(585,230)
    this.input = createInput("");
    this.button = createButton('CONTINUE');
    
   
    
  }
  hide(){
  
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  

  display(){
    

     
    
    

    this.input.position(650,250);
    this.button.position(680,290);

    
  
 

   
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.element.hide();

      this.instructions = createElement("h2","INSTRUCTIONS")
     this.instructions.position(700,100)

     this.aa = createElement("h3", "THIS GAME HAS 3 TOPICS : SCIENCE, MATHS, SOCIAL.")
     this.aa.position(300,175)
     this.aa1 = createElement("h3", "EACH TOPIC HAS 3 SUB-TOPICS.")
     this.aa1.position(300,225)
     this.aa2 = createElement("h3", "EACH SUB-TOPIC HAS 10 QUESTION.")
     this.aa2.position(300,275)
     this.aa3 = createElement("h3", "EACH QUESTION HAS 3 OPTIONS.")
     this.aa3.position(300,325)
     this.aa4 = createElement("h3", "THIS IS MORE LIKE AN ONLINE QUIZ BOOK.")
     this.aa4.position(300,375)
    //  this.aa5 = createElement("h3", "WE WILL ADD MORE QUESTIONS AND TOPICS WEEKLY.")
    // this.aa5.position(300,425)
     this.aa6 = createElement("h3", "I HOPE YOU ENJOY THE QUIZ.")
     this.aa6.position(650,525)

    
     this.AAS = createButton("START")
     this.AAS.position(750,600)

     this.AAS.mousePressed(()=>{
      this.instructions.hide()
      this.aa.hide()
      this.aa1.hide()
      this.aa2.hide()
      this.aa3.hide()
      this.aa4.hide()
      this.aa6.hide()
      this.AAS.hide()

      this.topic = createElement("h4", "TOPICS : ")
      this.topic.position(450,250)
      this.topic.size(200)
      
      this.button2 = createButton("SCIENCE");
      this.button2.position(450,325);
      this.button2.size(200);

      this.button3 = createButton("SOCIAL")
      this.button3.position(450,375);
      this.button3.size(200);
     
      this.button4 = createButton("MATH")
      this.button4.position(450,425)
      this.button4.size(200);

        this.button2.mousePressed(()=>{
        this.input.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.topic.hide();
        
        this.subtopic = createElement("h4", "SUB TOPICS : ")
      this.subtopic.position(450,250)
      
  
        
  
        this.button5 = createButton("CHEMISTRY");
        this.button5.position(450,325);
        this.button5.size(100);
  
        this.button6 = createButton("PHYSICS")
        this.button6.position(450,375);
        this.button6.size(100);
       
        this.button7 = createButton("BIOLOGY")
        this.button7.position(450,425)
        this.button7.size(100);

        this.button5.mousePressed(() =>{
          //score = 0;
           //this.points = createElement("h4", "SCORE = " +score)
           //this.points.position(800,250)
          
           this.subtopic.hide();
           
          this.input.hide();
           this.button5.hide();
           this.button6.hide();
           this.button7.hide();
           
           
           

           this.question1 = createElement("h2", "Q1. WHAT IS THE SYMBOL OF HELIUM ON THE PERIODIC TABLE?")
           this.question1.position(350,200)

           this.ans = createElement("h2","ANS : ")
           this.ans.position(350,275)
           
           this.a3 = createButton("H");
           this.a3.position(425,295)
           this.a3.size(225)
           
           this.a2 = createButton("Hg");
           this.a2.position(425,325)
           this.a2.size(225)
           this.a1 = createButton("He")
           this.a1.position(425,355)
           this.a1.size(225)







          

           
           this.a1.mousePressed(()=>{

            this.correct = createElement("h4","CORRECT ANSWER")
            this.correct.position(675,335) 

            this.next = createButton("NEXT")
            this.next.position(750,575)

            this.next.mousePressed(()=>{

              this.next.hide()
            this.correct.hide()
             
            this.a1.hide()
            this.a2.hide() 
            this.a3.hide()
            
           
            this.question1.hide();
            
            
            this.question2 = createElement("h2", "Q2. WHAT IS THE MAIN CONSTITUENT OF COAL GAS?")
            this.question2.position(350,200)
            this.a4 = createButton("Methane");
           this.a4.position(425,295)
           this.a4.size(225)
           
           this.a5 = createButton("Carbon Dioxide");
           this.a5.position(425,325)
           this.a5.size(225)
           this.a6= createButton("Nitrogen")
           this.a6.position(425,355)
           this.a6.size(225)

            
          
            
            this.a4.mousePressed(()=>{
              this.correct1 = createElement("h4","CORRECT ANSWER")
            this.correct1.position(675,275) 

            this.next1 = createButton("NEXT")
            this.next1.position(750,575)

            this.next1.mousePressed(()=>{

              this.next1.hide()
            this.correct1.hide()
             
            score =score + 1;
             this.question2.hide();

             this.a6.hide()
             this.a5.hide() 
             this.a4.hide()
            
           
             this.question3 = createElement("h2", "Q3. WHICH IS THE ELEMENT THAT COMES HALF A SCORE AFTER MAGNESIUM ?")
             this.question3.position(350,200)
               
          
             this.a7 = createButton("Iron");
            this.a7.position(425,295)
            this.a7.size(225)
            
            this.a8 = createButton("Titanium");
            this.a8.position(425,325)
            this.a8.size(225)
            this.a9= createButton("Gold")
            this.a9.position(425,355)
            this.a9.size(225)
            
              
            this.a8.mousePressed(()=>{
              this.correct2 = createElement("h4","CORRECT ANSWER")
            this.correct2.position(675,305) 

            this.next2 = createButton("NEXT")
            this.next2.position(750,575)

            this.next2.mousePressed(()=>{

              this.next2.hide()
            this.correct2.hide()
             
              score =score + 1;
               this.question3.hide();
  
               this.a9.hide()
               this.a8.hide() 
               this.a7.hide()
              
             
               this.question4 = createElement("h2", "Q4. WHICH ELEMENT'S SYMBOL IS Hg ?")
               this.question4.position(350,200)
                 
            
               this.a10 = createButton("Magnesium");
              this.a10.position(425,295)
              this.a10.size(225)
              
              this.a11 = createButton("Mercury");
              this.a11.position(425,325)
              this.a11.size(225)
              this.a12= createButton("Potassium")
              this.a12.position(425,355)
              this.a12.size(225)
              

            
            
              this.a11.mousePressed(()=>{
                this.correct3 = createElement("h4","CORRECT ANSWER")
                this.correct3.position(675,305) 
    
                this.next3 = createButton("NEXT")
                this.next3.position(750,575)
    
                this.next3.mousePressed(()=>{
    
                  this.next3.hide()
                this.correct3.hide()
             
                score =score + 1;
                 this.question4.hide();
    
                 this.a10.hide()
                 this.a11.hide() 
                 this.a12.hide()
                
               
                 this.question5 = createElement("h2", "Q5. WHICH ACID IS FOUND IN OUR STOMACH ?")
                 this.question5.position(350,200)
                   
              
                 this.a13 = createButton("HCl");
                this.a13.position(425,295)
                this.a13.size(225)
                
                this.a14 = createButton("H2SO4");
                this.a14.position(425,325)
                this.a14.size(225)
                this.a15= createButton("HNO3")
                this.a15.position(425,355)
                this.a15.size(225)

     
                this.a13.mousePressed(()=>{
                  this.correct4 = createElement("h4","CORRECT ANSWER")
                  this.correct4.position(675,275) 
      
                  this.next4 = createButton("NEXT")
                  this.next4.position(750,575)
      
                  this.next4.mousePressed(()=>{
      
                    this.next4.hide()
                  this.correct4.hide()
             
                  score =score + 1;
                   this.question5.hide();
      
                   this.a13.hide()
                   this.a14.hide() 
                   this.a15.hide()
                  
                 
                   this.question6 = createElement("h2", "Q6. WHAT IS THE PROCESS IN WHICH GAS IS TURNED INTO LIQUID ?")
                   this.question6.position(350,200)
                     
                
                   this.a16 = createButton("Evaporation");
                  this.a16.position(425,295)
                  this.a16.size(225)
                  
                  this.a17 = createButton("Cooling");
                  this.a17.position(425,325)
                  this.a17.size(225)
                  this.a18= createButton("Condensation")
                  this.a18.position(425,355)
                  this.a18.size(225)

             
            this.a18.mousePressed(()=>{
              this.correct5 = createElement("h4","CORRECT ANSWER")
            this.correct5.position(675,335) 

            this.next5 = createButton("NEXT")
            this.next5.position(750,575)

            this.next5.mousePressed(()=>{

              this.next5.hide()
            this.correct5.hide()
             
              score =score + 1;
               this.question6.hide();
  
               this.a18.hide()
               this.a17.hide() 
               this.a16.hide()
              
             
               this.question7 = createElement("h2", "Q7. WHICH SUB-ATOMIC PARTICLE IS NAMED AFTER SATYENDRANATH BOSE ?")
               this.question7.position(350,200)
                 
            
               this.a19 = createButton("Pion");
              this.a19.position(425,295)
              this.a19.size(225)
              
              this.a20 = createButton("Photon");
              this.a20.position(425,325)
              this.a20.size(225)
              this.a21= createButton("Boson")
              this.a21.position(425,355)
              this.a21.size(225)
             this.a21.mousePressed(()=>{
             
              this.correct6 = createElement("h4","CORRECT ANSWER")
            this.correct6.position(675,335) 

            this.next6 = createButton("NEXT")
            this.next6.position(750,575)

            this.next6.mousePressed(()=>{

              this.next6.hide()
            this.correct6.hide()
                score =score + 1;
                 this.question7.hide();
    
                 this.a21.hide()
                 this.a20.hide() 
                 this.a19.hide()
                
               
                 this.question8 = createElement("h2", "Q8. NAME THE ONLY PERSON TO WIN NOBEL PRIZES FOR BOTH PHYSICS AND CHEMISTRY ?")
                 this.question8.position(350,200)
                   
              
                 this.a22 = createButton("Albert Einstein");
                this.a22.position(425,295)
                this.a22.size(225)
                
                this.a23 = createButton("Marie Curie");
                this.a23.position(425,325)
                this.a23.size(225)
                this.a24= createButton("C.V.Raman")
                this.a24.position(425,355)
                this.a24.size(225)

             this.a23.mousePressed(()=>{
              this.correct7 = createElement("h4","CORRECT ANSWER")
              this.correct7.position(675,305) 
  
              this.next7 = createButton("NEXT")
              this.next7.position(750,575)
  
              this.next7.mousePressed(()=>{
  
                this.next7.hide()
              this.correct7.hide()
           
            score =score + 1;
             this.question8.hide();
            
             
             this.question9 = createElement("h2", "Q9. WHICH GEMSTOME IS PURPLE IN COLOUR ?")
             this.question9.position(350,200)
          
             
             
             
               
  
               this.a22.hide()
               this.a23.hide() 
               this.a24.hide()
              
            
                 
            
              this.a25 = createButton("Amber");
              this.a25.position(425,295)
              this.a25.size(225)
              
              this.a26 = createButton("Amythest");
              this.a26.position(425,325)
              this.a26.size(225)
              this.a27= createButton("Sapphire")
              this.a27.position(425,355)
              this.a27.size(225) 

             this.a26.mousePressed(()=>{
            
              this.correct8 = createElement("h4","CORRECT ANSWER")
              this.correct8.position(675,305) 
  
              this.next8 = createButton("NEXT")
              this.next8.position(750,575)
  
              this.next8.mousePressed(()=>{
  
                this.next8.hide()
              this.correct8.hide()
            score =score + 1;
             this.question9.hide();
             
             this.a25.hide();
             this.a26.hide()
             this.a27.hide()
             this.question10 = createElement("h2", "Q10. WHICH NON-METAL IS THE BEST CONDUCTOR OF HEAT ?")
             this.question10.position(350,200)
            
             this.a28 = createButton("Florine");
             this.a28.position(425,295)
             this.a28.size(225)
             
             this.a29 = createButton("Chlorine");
             this.a29.position(425,325)
             this.a29.size(225)
             this.a30= createButton("Carbon")
             this.a30.position(425,355)
             this.a30.size(225) 

             this.a30.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,335) 
  
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
  
              this.next9.mousePressed(()=>{
  
                this.next9.hide()
              this.correct9.hide()
              this.a28.hide();
              this.a29.hide()
              this.a30.hide()
              this.question10.hide()
              this.ans.hide();

              this.thanks = createElement("h2", "THANKS FOR PLAYING")
               this.thanks.position(650,350)

               this.back = createButton("BACK")
               this.back.position(900,550)

               this.back.mousePressed(()=>{
              this.back.hide()
              this.thanks.hide()
              this.button2.show();
              this.button3.show();
              this.button4.show();
              this.topic.show()
            })
              
              
              


             })
              
       


        

             })

              
            });

          })
            });

              
            });

          })
            });
          })
        })
      });
    })
  })
})
        })
              
            });

            
            
            });
          
        });
      })
      })
       
   
        });
          
     


this.button6.mousePressed(() =>{
  //score = 0;
   //this.points = createElement("h4", "SCORE = " +score)
   //this.points.position(800,250)
  
   this.subtopic.hide();
   
  this.input.hide();
   this.button5.hide();
   this.button6.hide();
   this.button7.hide();
   
   
   

   this.wquestion1 = createElement("h2", "Q1. NAME THE DEVICE WHICH IS USED TO MEASURE HUMIDITY?")
   this.wquestion1.position(350,200)

   this.wans = createElement("h2","ANS : ")
   this.wans.position(350,275)
   
   this.la3 = createButton("Hydrometer");
   this.la3.position(425,295)
   this.la3.size(225)
   
   this.la2 = createButton("Hygrometer");
   this.la2.position(425,325)
   this.la2.size(225)
   this.la1 = createButton("Barometer")
   this.la1.position(425,355)
   this.la1.size(225)

   this.la2.mousePressed(()=>{
    this.icorrect1 = createElement("h4","CORRECT ANSWER")
    this.icorrect1.position(675,305) 

    this.inext1 = createButton("NEXT")
    this.inext1.position(750,575)

    this.inext1.mousePressed(()=>{

      this.inext1.hide()
    this.icorrect1.hide()
    
    this.la1.hide()
    this.la2.hide() 
    this.la3.hide()
   
    this.wquestion1.hide();
    
    
    this.wquestion2 = createElement("h2", "Q2. WHICH IS THE NEAREST STAR TO EARTH AFTER SUN ?") 
    this.wquestion2.position(350,200)
    this.la4 = createButton("POLARIS");
   this.la4.position(425,295)
   this.la4.size(225)
   
   this.la5 = createButton("SIRIUS");
   this.la5.position(425,325)
   this.la5.size(225)
   this.la6= createButton("PROXIMA CENTAURI")
   this.la6.position(425,355)
   this.la6.size(225)

    
  
    
    this.la6.mousePressed(()=>{
     
      this.icorrect2 = createElement("h4","CORRECT ANSWER")
            this.icorrect2.position(675,335) 

            this.inext2 = createButton("NEXT")
            this.inext2.position(750,575)

            this.inext2.mousePressed(()=>{

              this.inext2.hide()
            this.icorrect2.hide()
    
     this.wquestion2.hide();

     this.la6.hide()
     this.la5.hide() 
     this.la4.hide()
    
   
     this.wquestion3 = createElement("h2", "Q3. WHAT IS THE S.I.UNIT OF PRESSURE ?")
     this.wquestion3.position(350,200)
       
  
     this.la7 = createButton("Joules");
    this.la7.position(425,295)
    this.la7.size(225)
    
    this.la8 = createButton("Pascal");
    this.la8.position(425,325)
    this.la8.size(225)
    this.la9= createButton("Newton")
    this.la9.position(425,355)
    this.la9.size(225)
    
      
    this.la8.mousePressed(()=>{
      this.icorrect3 = createElement("h4","CORRECT ANSWER")
      this.icorrect3.position(675,305) 

      this.inext3 = createButton("NEXT")
      this.inext3.position(750,575)

      this.inext3.mousePressed(()=>{

        this.inext3.hide()
      this.icorrect3.hide()
     
   
       this.wquestion3.hide();

       this.la9.hide()
       this.la8.hide() 
       this.la7.hide()
      
     
       this.wquestion4 = createElement("h2", "Q4. WHO IS KNOWN AS THE FATHER OF BLACK HOLES ?")
       this.wquestion4.position(350,200)
         
    
       this.la10 = createButton("John Wheeler");
      this.la10.position(425,295)
      this.la10.size(225)
      
      this.la11 = createButton("Albert Einstein");
      this.la11.position(425,325)
      this.la11.size(225)
      this.la12= createButton("Nikola Tesla")
      this.la12.position(425,355)
      this.la12.size(225)
      

    
    
      this.la10.mousePressed(()=>{
     
        this.icorrect4 = createElement("h4","CORRECT ANSWER")
        this.icorrect4.position(675,275) 

        this.inext4 = createButton("NEXT")
        this.inext4.position(750,575)

        this.inext4.mousePressed(()=>{

          this.inext4.hide()
        this.icorrect4.hide()
        score =score + 1;
         this.wquestion4.hide();

         this.la10.hide()
         this.la11.hide() 
         this.la12.hide()
        
       
         this.wquestion5 = createElement("h2", "Q5. NUCLEAR SIZES ARE EXPRESSED IN A UNIT NAMED ?")
         this.wquestion5.position(350,200)
           
      
         this.la13 = createButton("Fermi");
        this.la13.position(425,295)
        this.la13.size(225)
        
        this.la14 = createButton("Angstorm");
        this.la14.position(425,325)
        this.la14.size(225)
        this.la15= createButton("Newton")
        this.la15.position(425,355)
        this.la15.size(225)


        this.la13.mousePressed(()=>{
          this.correct1 = createElement("h4","CORRECT ANSWER")
          this.correct1.position(675,275) 

          this.next1 = createButton("NEXT")
          this.next1.position(750,575)

          this.next1.mousePressed(()=>{

            this.next1.hide()
          this.correct1.hide()
     
     
          score =score + 1;
           this.wquestion5.hide();

           this.la13.hide()
           this.la14.hide() 
           this.la15.hide()
          
         
           this.wquestion6 = createElement("h2", "Q6. WHICH SUB-ATOMIC PARTICLE IS POSTIVELY CHARGED?")
           this.wquestion6.position(350,200)
             
        
           this.la16 = createButton("Neutron");
          this.la16.position(425,295)
          this.la16.size(225)
          
          this.la17 = createButton("Proton");
          this.la17.position(425,325)
          this.la17.size(225)
          this.la18= createButton("Electron")
          this.la18.position(425,355)
          this.la18.size(225)

     
    this.la17.mousePressed(()=>{
      this.correct1 = createElement("h4","CORRECT ANSWER")
            this.correct1.position(675,305) 

            this.next1 = createButton("NEXT")
            this.next1.position(750,575)

            this.next1.mousePressed(()=>{

              this.next1.hide()
            this.correct1.hide()
     
       this.wquestion6.hide();

       this.la18.hide()
       this.la17.hide() 
       this.la16.hide()
      
     
       this.wquestion7 = createElement("h2", "Q7. WHAT IS THE SPEED OF LIGHT ?")
       this.wquestion7.position(350,200)
         
    
       this.la19 = createButton("30 MILLION METRE PER SECOND");
      this.la19.position(425,300)
      this.la19.size(225)
      
      this.la20 = createButton("3 MILLION METRE PER SECOND");
      this.la20.position(425,350)
      this.la20.size(225)
      this.la21= createButton("300 MILLION METRE PER SECOND")
      this.la21.position(425,380)
      this.la21.size(225)

     this.la21.mousePressed(()=>{
      this.correct1 = createElement("h4","CORRECT ANSWER")
            this.correct1.position(675,360) 

            this.next1 = createButton("NEXT")
            this.next1.position(750,575)

            this.next1.mousePressed(()=>{

              this.next1.hide()
            this.correct1.hide()
     
        score =score + 1;
         this.wquestion7.hide();

         this.la21.hide()
         this.la20.hide() 
         this.la19.hide()
        
       
         this.wquestion8 = createElement("h2", "Q8. NAME THE 2nd INDIAN TO WIN THE NOBEL PRIZE FOR PHYSICS ?")
         this.wquestion8.position(350,200)
           
      
         this.la22 = createButton("AMARTYA SEN");
        this.la22.position(425,295)
        this.la22.size(225)
        
        this.la23 = createButton("SUBRAHMANYAN CHANDRASEKHAR");
        this.la23.position(425,325)
        this.la23.size(225)
        this.la24= createButton("KAILASH SATYARTHI")
        this.la24.position(425,375)
        this.la24.size(225)

     this.la23.mousePressed(()=>{
      this.icorrect7 = createElement("h4","CORRECT ANSWER")
      this.icorrect7.position(675,305) 

      this.inext7 = createButton("NEXT")
      this.inext7.position(750,575)

      this.inext7.mousePressed(()=>{

        this.inext7.hide()
      this.icorrect7.hide()
   
    score =score + 1;
     this.wquestion8.hide();
    
     
     this.wquestion9 = createElement("h2", "Q9. WHO WROTE THE FAMOUS SCIENCE BOOK 'A BRIEF HISTORY OF TIME' ?")
     this.wquestion9.position(350,200)
  
     
     
     
       

       this.la22.hide()
       this.la23.hide() 
       this.la24.hide()
      
    
         
    
      this.la25 = createButton("Sudha Murthy");
      this.la25.position(425,295)
      this.la25.size(225)
      
      this.la26 = createButton("Vikram Sarabhai");
      this.la26.position(425,325)
      this.la26.size(225)
      this.la27= createButton("Stephen Hawking")
      this.la27.position(425,355)
      this.la27.size(225) 

     this.la27.mousePressed(()=>{
    
      this.icorrect5 = createElement("h4","CORRECT ANSWER")
      this.icorrect5.position(675,335) 

      this.inext5 = createButton("NEXT")
      this.inext5.position(750,575)

      this.inext5.mousePressed(()=>{

        this.inext5.hide()
      this.icorrect5.hide()
    
     this.wquestion9.hide();
     
     this.la25.hide();
     this.la26.hide()
     this.la27.hide()
     this.wquestion10 = createElement("h2", "Q10. WHO DID THE FEATHER-ROCK EXPIREMENT AND DISCOVERED IO, GANYMEDE, EUROPA, CALLISTO  ?")
     this.wquestion10.position(175,200)
    
     this.la28 = createButton("Nicolaus Copernicus");
     this.la28.position(425,295)
     this.la28.size(225)
     
     this.la29 = createButton("Galileo Galilei");
     this.la29.position(425,325)
     this.la29.size(225)
     this.la30= createButton("Edmond Hailey")
     this.la30.position(425,355)
     this.la30.size(225) 

     this.la29.mousePressed(()=>{
      this.icorrect6 = createElement("h4","CORRECT ANSWER")
      this.icorrect6.position(675,305) 

      this.inext6 = createButton("NEXT")
      this.inext6.position(750,575)

      this.inext6.mousePressed(()=>{

        this.inext6.hide()
      this.icorrect6.hide()
      this.la28.hide();
      this.la29.hide()
      this.la30.hide()
      this.wquestion10.hide()
      this.wans.hide();

      this.topic.show()

      this.button2.show();
      this.button3.show();
      this.button4.show();
      



     })
    })
  })
})
      })
    })
  })

    });

      
    });

  }) 
    });
  })
      
    });

  })
})
    });

  }) 
    });
  })
      
    });

      
    });

    
 

this.button7.mousePressed(() =>{
  //score = 0;
   //this.points = createElement("h4", "SCORE = " +score)
   //this.points.position(800,250)
  
   this.subtopic.hide();
   
  this.input.hide();
   this.button5.hide();
   this.button6.hide();
   this.button7.hide();
   
   
   

   this.qwquestion1 = createElement("h2", "Q1. WHICH GLAND SECRETES GROWTH HORMONE?")
   this.qwquestion1.position(350,200)

   this.qwans = createElement("h2","ANS : ")
   this.qwans.position(350,275)
   
   this.qla3 = createButton("Liver");
   this.qla3.position(425,295)
   this.qla3.size(225)
   
   this.qla2 = createButton("Adrenal");
   this.qla2.position(425,325)
   this.qla2.size(225)
   this.qla1 = createButton("Pituitary")
   this.qla1.position(425,355)
   this.qla1.size(225)

   this.qla1.mousePressed(()=>{
    this.coirrect9 = createElement("h4","CORRECT ANSWER")
    this.coirrect9.position(675,335) 

    this.neixt9 = createButton("NEXT")
    this.neixt9.position(750,575)

    this.neixt9.mousePressed(()=>{

      this.neixt9.hide()
    this.coirrect9.hide()
    
    this.qla1.hide()
    this.qla2.hide() 
    this.qla3.hide()
   
    this.qwquestion1.hide();
    
    
    this.qwquestion2 = createElement("h2", "Q2. WHICH MICROORGANISM CONTAINS CHLOROPHYLL ?") 
    this.qwquestion2.position(350,200)
    this.qla4 = createButton("Algae");
   this.qla4.position(425,295)
   this.qla4.size(225)
   
   this.qla5 = createButton("Fungi");
   this.qla5.position(425,325)
   this.qla5.size(225)
   this.qla6= createButton("Protozoa")
   this.qla6.position(425,355)
   this.qla6.size(225)

    
  
    
    this.qla4.mousePressed(()=>{
      this.coiirrect9 = createElement("h4","CORRECT ANSWER")
      this.coiirrect9.position(675,275) 

      this.neiixt9 = createButton("NEXT")
      this.neiixt9.position(750,575)

      this.neiixt9.mousePressed(()=>{

        this.neiixt9.hide()
      this.coiirrect9.hide()
     
    
     this.qwquestion2.hide();

     this.qla6.hide()
     this.qla5.hide() 
     this.qla4.hide()
    
   
     this.qwquestion3 = createElement("h2", "Q3. WHICH BLOOD VESSELS HAVE THE SMALLEST DIAMETER?")
     this.qwquestion3.position(350,200)
       
  
     this.qla7 = createButton("Venules");
    this.qla7.position(425,295)
    this.qla7.size(225)
    
    this.qla8 = createButton("Capillaries");
    this.qla8.position(425,325)
    this.qla8.size(225)
    this.qla9= createButton("Arterioles")
    this.qla9.position(425,355)
    this.qla9.size(225)
    
      
    this.qla8.mousePressed(()=>{
    this.coiorrect9 = createElement("h4","CORRECT ANSWER")

    this.coiorrect9.position(675,305) 

    this.next9 = createButton("NEXT")
    this.next9.position(750,575)

    this.next9.mousePressed(()=>{
      this.coiorrect9.hide()
      this.next9.hide()
    
     
   
       this.qwquestion3.hide();

       this.qla9.hide()
       this.qla8.hide() 
       this.qla7.hide()
      
     
       this.qwquestion4 = createElement("h2", "Q4. WHICH IS THE LARGEST CELL IN THE WORLD  ?")
       this.qwquestion4.position(350,200)
         
    
       this.qla10 = createButton("Elephant's Nerve Cell");
      this.qla10.position(425,295)
      this.qla10.size(225)
      
      this.qla11 = createButton("Turtle eggs");
      this.qla11.position(425,325)
      this.qla11.size(225)
      this.qla12= createButton("Ostrich Egg")
      this.qla12.position(425,355)
      this.qla12.size(225)
      

    
    
      this.qla12.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,335) 

        this.next9 = createButton("NEXT")
        this.next9.position(750,575)

        this.next9.mousePressed(()=>{

          this.next9.hide()
        this.correct9.hide()
     
        
         this.qwquestion4.hide();

         this.qla10.hide()
         this.qla11.hide() 
         this.qla12.hide()
        
       
         this.qwquestion5 = createElement("h2", "Q5. MOST HIGHLY INTELLIGENT MAMMALS ARE ?")
         this.qwquestion5.position(350,200)
           
      
         this.qla13 = createButton("Dolphin");
        this.qla13.position(425,295)
        this.qla13.size(225)
        
        this.qla14 = createButton("Dog");
        this.qla14.position(425,325)
        this.qla14.size(225)
        this.qla15= createButton("Chimpanzee")
        this.qla15.position(425,355)
        this.qla15.size(225)


        this.qla13.mousePressed(()=>{
          this.correct9 = createElement("h4","CORRECT ANSWER")
          this.correct9.position(675,275) 

          this.next9 = createButton("NEXT")
          this.next9.position(750,575)

          this.next9.mousePressed(()=>{

            this.next9.hide()
          this.correct9.hide()
     
          
           this.qwquestion5.hide();

           this.qla13.hide()
           this.qla14.hide() 
           this.qla15.hide()
          
         
           this.qwquestion6 = createElement("h2", "Q6. HOW MANY PAIRS OF RIBS ARE THERE IN HUMAN BODY?")
           this.qwquestion6.position(350,200)
             
        
           this.qla16 = createButton("12");
          this.qla16.position(425,295)
          this.qla16.size(225)
          
          this.qla17 = createButton("24");
          this.qla17.position(425,325)
          this.qla17.size(225)
          this.qla18= createButton("18")
          this.qla18.position(425,355)
          this.qla18.size(225)

     
    this.qla16.mousePressed(()=>{
     
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,275) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
       this.qwquestion6.hide();

       this.qla18.hide()
       this.qla17.hide() 
       this.qla16.hide()
      
     
       this.qwquestion7 = createElement("h2", "Q7. NYMPH IS THE NAME OF YOUNG ONE OF  ?")
       this.qwquestion7.position(350,200)
         
    
       this.qla19 = createButton("BEETLE");
      this.qla19.position(425,295)
      this.qla19.size(225)
      
      this.qla20 = createButton("BUTTERFLY");
      this.qla20.position(425,325)
      this.qla20.size(225)
      this.qla21= createButton("COCKROACH")
      this.qla21.position(425,355)
      this.qla21.size(225)

     this.qla21.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
     
        
         this.qwquestion7.hide();

         this.qla21.hide()
         this.qla20.hide() 
         this.qla19.hide()
        
       
         this.qwquestion8 = createElement("h2", "Q8. PLANTS SYNTHESIS PROTEINS FROM?")
         this.qwquestion8.position(350,200)
           
      
         this.qla22 = createButton("Starch");
        this.qla22.position(425,295)
        this.qla22.size(225)
        
        this.qla23 = createButton("Amino Acids");
        this.qla23.position(425,325)
        this.qla23.size(225)
        this.qla24= createButton("Lactose")
        this.qla24.position(425,355)
        this.qla24.size(225)

     this.qla23.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,305) 
  
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
  
              this.next9.mousePressed(()=>{
  
                this.next9.hide()
              this.correct9.hide()
   
  
     this.qwquestion8.hide();
    
     
     this.qwquestion9 = createElement("h2", "Q9. INTERNAL CELLULAR RESPIRATION TAKES PLACE IN ?")
     this.qwquestion9.position(350,200)
  
     
     
     
       

       this.qla22.hide()
       this.qla23.hide() 
       this.qla24.hide()
      
    
         
    
      this.qla25 = createButton("Ribosome");
      this.qla25.position(425,295)
      this.qla25.size(225)
      
      this.qla26 = createButton("Endoplasmic Reticulum");
      this.qla26.position(425,325)
      this.qla26.size(225)
      this.qla27= createButton("Mitochondria")
      this.qla27.position(425,355)
      this.qla27.size(225) 

     this.qla27.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
    
     this.qwquestion9.hide();
     
     this.qla25.hide();
     this.qla26.hide()
     this.qla27.hide()
     this.qwquestion10 = createElement("h2", "Q10. POLLLINATION BY WIND IS CALLED ?")
     this.qwquestion10.position(350,200)
    
     this.qla28 = createButton("HYDROPHILY");
     this.qla28.position(425,295)
     this.qla28.size(225)
     
     this.qla29 = createButton("ENTOMOPHILY");
     this.qla29.position(425,325)
     this.qla29.size(225)
     this.qla30= createButton("ANEMOPHILY")
     this.qla30.position(425,355)
     this.qla30.size(225) 

     this.qla30.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
      this.thanks = createElement("h2", "THANKS FOR PLAYING")
      this.thanks.position(650,350)

      this.back = createButton("BACK")
      this.back.position(900,550)
      this.qla28.hide();
      this.qla29.hide()
      this.qla30.hide()
      this.qwquestion10.hide()
      this.qwans.hide();
      this.back.mousePressed(()=>{
     this.back.hide()
     this.thanks.hide()
    

      this.topic.show()

      this.button2.show();
      this.button3.show();
      this.button4.show();
      
      })


     })
      
    });
  })
})
              })
            })
          })
        })
      })
    })
  })
})
        
      
    });

      
    });

      
    });

      
    });

      
    });

      
    });

     
   } );
  });

      
    });

  

    
  
  
  
      })
      this.button3.mousePressed(()=>{
      
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.topic.hide();
        
      
      
        this.subtopic1 = createElement("h3","SUB TOPIC:")
        this.subtopic1.position(450,250)
  
        this.button8 = createButton("HISTORY");
        this.button8.position(450,325);
        this.button8.size(100);
  
        this.button9 = createButton("GEOGRAPHY")
        this.button9.position(450,375);
        this.button9.size(100);
       
        this.button10 = createButton("POLITICS")
        this.button10.position(450,425)
        this.button10.size(100);

        this.button8.mousePressed(() =>{
          //score = 0;
           //this.points = createElement("h4", "SCORE = " +score)
           //this.points.position(800,250)
          
           this.subtopic1.hide();
           
          this.input.hide();
           this.button8.hide();
           this.button9.hide();
           this.button10.hide();
           
           
           

           this.Iquestion1 = createElement("h2", "Q1. IN BENEGAL, THE HEADQUARTERS OF BRITISH EAST INDIA COMPANY WERE LOCATED AT?")
           this.Iquestion1.position(350,200)

           this.Ians = createElement("h2","ANS : ")
           this.Ians.position(350,275)
           
           this.Ia3 = createButton("Calcutta");
           this.Ia3.position(425,295)
           this.Ia3.size(225)
          
           this.Ia2 = createButton("Fort William");
           this.Ia2.position(425,325)
           this.Ia2.size(225)
           this.Ia1 = createButton("Fort St. George")
           this.Ia1.position(425,355)
           this.Ia1.size(225)

           
           this.Ia2.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,305) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
            
            this.Ia1.hide()
            this.Ia2.hide() 
            this.Ia3.hide()
           
            this.Iquestion1.hide();
            
            
            this.Iquestion2 = createElement("h2", "Q2. WHICH WAS THE FIRST ENGLISH NEWSPAPER IN INDIA?")
            this.Iquestion2.position(350,200)
            this.Ia4 = createButton("The Benegal Gazette");
           this.Ia4.position(425,295)
           this.Ia4.size(225)
           
           this.Ia5 = createButton("The Hindu");
           this.Ia5.position(425,325)
           this.Ia5.size(225)
           this.Ia6= createButton("The Bombay Herald")
           this.Ia6.position(425,355)
           this.Ia6.size(225)

            
          
            
            this.Ia4.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,275) 
        
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
        
              this.next9.mousePressed(()=>{
        
                this.next9.hide()
              this.correct9.hide()
                     
             
            score =score + 1;
             this.Iquestion2.hide();

             this.Ia6.hide()
             this.Ia5.hide() 
             this.Ia4.hide()
            
           
             this.Iquestion3 = createElement("h2", "Q3. WHO WAS THE KING OF RUSSIA DURING THE BOLSHEVEIK REVOLUTION ?")
             this.Iquestion3.position(350,200)
               
          
             this.Ia7 = createButton("King Tsar Nicholas I");
            this.Ia7.position(425,295)
            this.Ia7.size(225)
            
            this.Ia8 = createButton("Dutchess Anastasia");
            this.Ia8.position(425,325)
            this.Ia8.size(225)
            this.Ia9= createButton("King Tsar Nicholas II")
            this.Ia9.position(425,355)
            this.Ia9.size(225)
            
              
            this.Ia9.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,335) 
        
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
        
              this.next9.mousePressed(()=>{
        
                this.next9.hide()
              this.correct9.hide()
                     
             
              score =score + 1;
               this.Iquestion3.hide();
  
               this.Ia9.hide()
               this.Ia8.hide() 
               this.Ia7.hide()
              
             
               this.Iquestion4 = createElement("h2", "Q4. LIKE NAZISM IS FOR GERMANY, THEN WHAT IS FOR ITALY ?")
               this.Iquestion4.position(350,200)
                 
            
               this.Ia10 = createButton("Prussian");
              this.Ia10.position(425,295)
              this.Ia10.size(225)
              
              this.Ia11 = createButton("Fascism");
              this.Ia11.position(425,325)
              this.Ia11.size(225)
              this.Ia12= createButton("Hanvorism")
              this.Ia12.position(425,355)
              this.Ia12.size(225)
              

            
            
              this.Ia11.mousePressed(()=>{
                this.correct9 = createElement("h4","CORRECT ANSWER")
                this.correct9.position(675,305) 
          
                this.next9 = createButton("NEXT")
                this.next9.position(750,575)
          
                this.next9.mousePressed(()=>{
          
                  this.next9.hide()
                this.correct9.hide()
                       
             
                score =score + 1;
                 this.Iquestion4.hide();
    
                 this.Ia10.hide()
                 this.Ia11.hide() 
                 this.Ia12.hide()
                
               
                 this.Iquestion5 = createElement("h2", "Q5. WHERE WAS THE FIRST CURRENCY PRINTING PRESS SETUP IN INDIA  ?")
                 this.Iquestion5.position(350,200)
                   
              
                 this.Ia13 = createButton("CHENNAI");
                this.Ia13.position(425,295)
                this.Ia13.size(225)
                
                this.Ia14 = createButton("BOMBAY");
                this.Ia14.position(425,325)
                this.Ia14.size(225)
                this.Ia15= createButton("NASHIK")
                this.Ia15.position(425,355)
                this.Ia15.size(225)

     
                this.Ia15.mousePressed(()=>{
                  this.correct9 = createElement("h4","CORRECT ANSWER")
                  this.correct9.position(675,335) 
            
                  this.next9 = createButton("NEXT")
                  this.next9.position(750,575)
            
                  this.next9.mousePressed(()=>{
            
                    this.next9.hide()
                  this.correct9.hide()
                
             
                  score =score + 1;
                   this.Iquestion5.hide();
      
                   this.Ia13.hide()
                   this.Ia14.hide() 
                   this.Ia15.hide()
                  
                 
                   this.Iquestion6 = createElement("h2", "Q6. WHICH COUNTRY GAVE THE STATUE OF LIBERTY TO USA AS A GIFT ?")
                   this.Iquestion6.position(350,200)
                     
                
                   this.Ia16 = createButton("UK");
                  this.Ia16.position(425,295)
                  this.Ia16.size(225)
                  
                  this.Ia17 = createButton("France");
                  this.Ia17.position(425,325)
                  this.Ia17.size(225)
                  this.Ia18= createButton("USSR")
                  this.Ia18.position(425,355)
                  this.Ia18.size(225)

             
            this.Ia17.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,305) 
        
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
        
              this.next9.mousePressed(()=>{
        
                this.next9.hide()
              this.correct9.hide()
                     
             
              score =score + 1;
               this.Iquestion6.hide();
  
               this.Ia18.hide()
               this.Ia17.hide() 
               this.Ia16.hide()
              
             
               this.Iquestion7 = createElement("h2", "Q7. WHICH MUGHAL EMPEROR HAD TO RULE IN EXILE ?")
               this.Iquestion7.position(350,200)
                 
            
               this.Ia19 = createButton("SHAH JAHAN");
              this.Ia19.position(425,295)
              this.Ia19.size(225)
              
              this.Ia20 = createButton("AURANGZEB");
              this.Ia20.position(425,325)
              this.Ia20.size(225)
              this.Ia21= createButton("HUMAYAN")
              this.Ia21.position(425,355)
              this.Ia21.size(225)
             this.Ia21.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,335) 
        
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
        
              this.next9.mousePressed(()=>{
        
                this.next9.hide()
              this.correct9.hide()
                     
             
                score =score + 1;
                 this.Iquestion7.hide();
    
                 this.Ia21.hide()
                 this.Ia20.hide() 
                 this.Ia19.hide()
                
               
                 this.Iquestion8 = createElement("h2", "Q8. WHICH EMPIRE LASTED THE LONGEST AMONG THE FOLLOWING  ?")
                 this.Iquestion8.position(350,200)
                   
              
                 this.Ia22 = createButton("THE RASHTRA KUTAS");
                this.Ia22.position(425,295)
                this.Ia22.size(225)
                
                this.Ia23 = createButton("THE PALAS");
                this.Ia23.position(425,325)
                this.Ia23.size(225)
                this.Ia24= createButton("THE PARTIHARAS")
                this.Ia24.position(425,355)
                this.Ia24.size(225)

             this.Ia22.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,275) 
        
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
        
              this.next9.mousePressed(()=>{
        
                this.next9.hide()
              this.correct9.hide()
                      
           
            score =score + 1;
             this.Iquestion8.hide();
            
             
             this.Iquestion9 = createElement("h2", "Q9. WHERE WAS THE FIRST DIAMOND MINE IN THE WORLD SETUP  ?")
             this.Iquestion9.position(350,200)
          
               this.Ia22.hide()
               this.Ia23.hide() 
               this.Ia24.hide()
              
            
                 
            
              this.Ia25 = createButton("BRAZIL");
              this.Ia25.position(425,295)
              this.Ia25.size(225)
              
              this.Ia26 = createButton("SOUTH AFRICA");
              this.Ia26.position(425,325)
              this.Ia26.size(225)
              this.Ia27= createButton("INDIA")
              this.Ia27.position(425,355)
              this.Ia27.size(225) 

             this.Ia27.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,335) 
        
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
        
              this.next9.mousePressed(()=>{
        
                this.next9.hide()
              this.correct9.hide()
                    
            
            score =score + 1;
             this.Iquestion9.hide();
             
             this.Ia25.hide();
             this.Ia26.hide()
             this.Ia27.hide()
             this.Iquestion10 = createElement("h2", "Q10. WHICH KING HAD A SIMILAR SIZED EMPIRE AS ASHOKA ?")
             this.Iquestion10.position(350,200)
            
             this.Ia28 = createButton("ABKAR");
             this.Ia28.position(425,295)
             this.Ia28.size(225)
             
             this.Ia29 = createButton("ALUDDIN KHALJI");
             this.Ia29.position(425,325)
             this.Ia29.size(225)
             this.Ia30= createButton("SHIVAJI")
             this.Ia30.position(425,355)
             this.Ia30.size(225) 

             this.Ia29.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,305) 
        
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
        
              this.next9.mousePressed(()=>{
        
                this.next9.hide()
              this.correct9.hide()
            
              this.thanks = createElement("h2", "THANKS FOR PLAYING")
              this.thanks.position(650,350)

              this.back = createButton("BACK")
              this.back.position(900,550)
              this.Ia28.hide();
              this.Ia29.hide()
              this.Ia30.hide()
              this.Iquestion10.hide()
              this.Ians.hide();
              this.back.mousePressed(()=>{
             this.back.hide()
             this.thanks.hide()
              

              this.topic.show()

              this.button2.show();
              this.button3.show();
              this.button4.show();

              })
              
            })
          })
        })
      })
    })
  })
})
             })
            })
            })          


             })
              
       


            })

        

              
            });

              
            });

              
            });

              
            });

              
            });

              
            });

            
            
            });
          
        });

      })
      this.button9.mousePressed(() =>{
        //score = 0;
         //this.points = createElement("h4", "SCORE = " +score)
         //this.points.position(800,250)
        
         this.subtopic1.hide();
         
        this.input.hide();
         this.button8.hide();
         this.button9.hide();
         this.button10.hide();
         
         
         

         this.AIquestion1 = createElement("h2", "Q1. WHICH IS THE TALLEST MOUNTAIN IN THE AFRICAN CONTINENT?")
         this.AIquestion1.position(350,200)

         this.AIans = createElement("h2","ANS : ")
         this.AIans.position(350,275)
         
         this.AIa3 = createButton("KILIMANJARO");
         this.AIa3.position(425,295)
         this.AIa3.size(225)
        
         this.AIa2 = createButton("ACONCAGUA");
         this.AIa2.position(425,325)
         this.AIa2.size(225)
         this.AIa1 = createButton("MONT BLANC")
         this.AIa1.position(425,355)
         this.AIa1.size(225)

         
         this.AIa3.mousePressed(()=>{
          this.correct9 = createElement("h4","CORRECT ANSWER")
          this.correct9.position(675,275) 
    
          this.next9 = createButton("NEXT")
          this.next9.position(750,575)
    
          this.next9.mousePressed(()=>{
    
            this.next9.hide()
          this.correct9.hide()
        
         
          
          this.AIa1.hide()
          this.AIa2.hide() 
          this.AIa3.hide()
         
          this.AIquestion1.hide();
          
          
          this.AIquestion2 = createElement("h2", "Q2. IN WHICH OCEAN IS THE MARIANA TRENCH ?")
          this.AIquestion2.position(350,200)
          this.AIa4 = createButton("INDIAN OCEAN");
         this.AIa4.position(425,295)
         this.AIa4.size(225)
         
         this.AIa5 = createButton("SOUTHERN OCEAN");
         this.AIa5.position(425,325)
         this.AIa5.size(225)
         this.AIa6= createButton("PACIFIC OCEAN")
         this.AIa6.position(425,355)
         this.AIa6.size(225)

          
        
          
          this.AIa6.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
           
          score =score + 1;
           this.AIquestion2.hide();

           this.AIa6.hide()
           this.AIa5.hide() 
           this.AIa4.hide()
          
         
           this.AIquestion3 = createElement("h2", "Q3. WHICH COUNTRY IS ALSO KNOWN AS THE PLAYGROUND OF EUROPE ?")
           this.AIquestion3.position(350,200)
             
        
           this.AIa7 = createButton("GERMANY");
          this.AIa7.position(425,295)
          this.AIa7.size(225)
          
          this.AIa8 = createButton("SWITZERLAND");
          this.AIa8.position(425,325)
          this.AIa8.size(225)
          this.AIa9= createButton("GREECE")
          this.AIa9.position(425,355)
          this.AIa9.size(225)
          
            
          this.AIa8.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
            this.correct9.position(675,305) 
      
            this.next9 = createButton("NEXT")
            this.next9.position(750,575)
      
            this.next9.mousePressed(()=>{
      
              this.next9.hide()
            this.correct9.hide()
                 
           
            score =score + 1;
             this.AIquestion3.hide();

             this.AIa9.hide()
             this.AIa8.hide() 
             this.AIa7.hide()
            
           
             this.AIquestion4 = createElement("h2", "Q4. WHICH CANAL CONNECTS THE RED SEA AND THE MEDITERRANEAN SEA ?")
             this.AIquestion4.position(350,200)
               
          
             this.AIa10 = createButton("BIO-BIO CANAL");
            this.AIa10.position(425,295)
            this.AIa10.size(225)
            
            this.AIa11 = createButton("PANAMA CANAL");
            this.AIa11.position(425,325)
            this.AIa11.size(225)
            this.AIa12= createButton("SUEZ CANAL")
            this.AIa12.position(425,355)
            this.AIa12.size(225)
            

          
          
            this.AIa12.mousePressed(()=>{
              this.correct9 = createElement("h4","CORRECT ANSWER")
              this.correct9.position(675,335) 
        
              this.next9 = createButton("NEXT")
              this.next9.position(750,575)
        
              this.next9.mousePressed(()=>{
        
                this.next9.hide()
              this.correct9.hide()
            
           
           
              score =score + 1;
               this.AIquestion4.hide();
  
               this.AIa10.hide()
               this.AIa11.hide() 
               this.AIa12.hide()
              
             
               this.AIquestion5 = createElement("h2", "Q5. WHICH COUNTRY HAS THE MOST NUMBER OF ISLANDS  ?")
               this.AIquestion5.position(350,200)
                 
            
               this.AIa13 = createButton("INDONESIA");
              this.AIa13.position(425,295)
              this.AIa13.size(225)
              
              this.AIa14 = createButton("SWEDEN");
              this.AIa14.position(425,325)
              this.AIa14.size(225)
              this.AIa15= createButton("MALAYSIA")
              this.AIa15.position(425,355)
              this.AIa15.size(225)

   
              this.AIa14.mousePressed(()=>{
                this.correct9 = createElement("h4","CORRECT ANSWER")
                this.correct9.position(675,305) 
          
                this.next9 = createButton("NEXT")
                this.next9.position(750,575)
          
                this.next9.mousePressed(()=>{
          
                  this.next9.hide()
                this.correct9.hide()
                     
           
                score =score + 1;
                 this.AIquestion5.hide();
    
                 this.AIa13.hide()
                 this.AIa14.hide() 
                 this.AIa15.hide()
                
               
                 this.AIquestion6 = createElement("h2", "Q6. WHAT IS THE CAPITAL OF AZERBAIJAN?")
                 this.AIquestion6.position(350,200)
                   
              
                 this.AIa16 = createButton("BAKU");
                this.AIa16.position(425,295)
                this.AIa16.size(225)
                
                this.AIa17 = createButton("TEL AVIV");
                this.AIa17.position(425,325)
                this.AIa17.size(225)
                this.AIa18= createButton("PALESTINE")
                this.AIa18.position(425,355)
                this.AIa18.size(225)

           
          this.AIa16.mousePressed(()=>{ this.correct9 = createElement("h4","CORRECT ANSWER")
          this.correct9.position(675,275) 
    
          this.next9 = createButton("NEXT")
          this.next9.position(750,575)
    
          this.next9.mousePressed(()=>{
    
            this.next9.hide()
          this.correct9.hide()
        
           
           
            score =score + 1;
             this.AIquestion6.hide();

             this.AIa18.hide()
             this.AIa17.hide() 
             this.AIa16.hide()
            
           
             this.AIquestion7 = createElement("h2", "Q7. WHICH CITY WAS ABKAR'S 2ND CAPITAL ?")
             this.AIquestion7.position(350,200)
               
          
             this.AIa19 = createButton("LAHORE");
            this.AIa19.position(425,295)
            this.AIa19.size(225)
            
            this.AIa20 = createButton("DELHI");
            this.AIa20.position(425,325)
            this.AIa20.size(225)
            this.AIa21= createButton("FATEHPUR SIKRI")
            this.AIa21.position(425,355)
            this.AIa21.size(225)
           this.AIa21.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
           
              score =score + 1;
               this.AIquestion7.hide();
  
               this.AIa21.hide()
               this.AIa20.hide() 
               this.AIa19.hide()
              
             
               this.AIquestion8 = createElement("h2", "Q8. WHICH IIT IN INDIA HAS AN AIRPORT IN IT ?")
               this.AIquestion8.position(350,200)
                 
            
               this.AIa22 = createButton("KANPUR");
              this.AIa22.position(425,295)
              this.AIa22.size(225)
              
              this.AIa23 = createButton("DELHI");
              this.AIa23.position(425,325)
              this.AIa23.size(225)
              this.AIa24= createButton("BANGALORE")
              this.AIa24.position(425,355)
              this.AIa24.size(225)

           this.AIa22.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
            this.correct9.position(675,275) 
      
            this.next9 = createButton("NEXT")
            this.next9.position(750,575)
      
            this.next9.mousePressed(()=>{
      
              this.next9.hide()
            this.correct9.hide()
                  
         
          score =score + 1;
           this.AIquestion8.hide();
          
           
           this.AIquestion9 = createElement("h2", "Q9.WHERE IN THE WORLD YOU CAN FIND THE MACHU PICHU  ?")
           this.AIquestion9.position(350,200)
        
             this.AIa22.hide()
             this.AIa23.hide() 
             this.AIa24.hide()
            
          
               
          
            this.AIa25 = createButton("BRAZIL");
            this.AIa25.position(425,295)
            this.AIa25.size(225)
            
            this.AIa26 = createButton("PERU");
            this.AIa26.position(425,325)
            this.AIa26.size(225)
            this.AIa27= createButton("ARGENTINA")
            this.AIa27.position(425,355)
            this.AIa27.size(225) 

           this.AIa26.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
            this.correct9.position(675,305) 
      
            this.next9 = createButton("NEXT")
            this.next9.position(750,575)
      
            this.next9.mousePressed(()=>{
      
              this.next9.hide()
            this.correct9.hide()
          
          
          score =score + 1;
           this.AIquestion9.hide();
           
           this.AIa25.hide();
           this.AIa26.hide()
           this.AIa27.hide()
           this.AIquestion10 = createElement("h2", "Q10. WHICH COUNTRY IS NOT A P5 MEMBER ?")
           this.AIquestion10.position(350,200)
          
           this.AIa28 = createButton("JAPAN");
           this.AIa28.position(425,295)
           this.AIa28.size(225)
           
           this.AIa29 = createButton("CHINA");
           this.AIa29.position(425,325)
           this.AIa29.size(225)
           this.AIa30= createButton("RUSSIA")
           this.AIa30.position(425,355)
           this.AIa30.size(225) 

           this.AIa28.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
            this.correct9.position(675,275) 
      
            this.next9 = createButton("NEXT")
            this.next9.position(750,575)
      
            this.next9.mousePressed(()=>{
      
              this.next9.hide()
            this.correct9.hide()
          
            this.thanks = createElement("h2", "THANKS FOR PLAYING")
            this.thanks.position(650,350)

            this.back = createButton("BACK")
            this.back.position(900,550)
            this.AIa28.hide();
            this.AIa29.hide()
            this.AIa30.hide()
            this.AIquestion10.hide()
            this.AIans.hide();
            this.back.mousePressed(()=>{
           this.back.hide()
           this.thanks.hide()
            

            this.topic.show()

            this.button2.show();
            this.button3.show();
            this.button4.show();
            })
            
            
            


           })
            
           })
          })
        })
      })
    })
  })
})
          })
        })
      })


      

      

            
          });

            
          });

            
          });

            
          });

            
          });

            
          });

          
          
          });
        
      });

    })
  })

  this.button10.mousePressed(() =>{
    //score = 0;
     //this.points = createElement("h4", "SCORE = " +score)
     //this.points.position(800,250)
    
     this.subtopic1.hide();
     
    this.input.hide();
     this.button8.hide();
     this.button9.hide();
     this.button10.hide();
     
     
     

     this.WAIquestion1 = createElement("h2", "Q1. WHICH COUNTRY HAS THE LONGEST WRITTEN CONSTITUTION IN THE WORLD?")
     this.WAIquestion1.position(350,200)

     this.WAIans = createElement("h2","ANS : ")
     this.WAIans.position(350,275)
     
     this.WAIa3 = createButton("USA");
     this.WAIa3.position(425,295)
     this.WAIa3.size(225)
    
     this.WAIa2 = createButton("INDIA");
     this.WAIa2.position(425,325)
     this.WAIa2.size(225)
     this.WAIa1 = createButton("BRAZIL")
     this.WAIa1.position(425,355)
     this.WAIa1.size(225)

     
     this.WAIa2.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,305) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
      
      this.WAIa1.hide()
      this.WAIa2.hide() 
      this.WAIa3.hide()
     
      this.WAIquestion1.hide();
      
      
      this.WAIquestion2 = createElement("h2", "Q2. WHICH COUNTRY'S HEAD IS A MONARCH ?")
      this.WAIquestion2.position(350,200)
      this.WAIa4 = createButton("SWEDEN");
     this.WAIa4.position(425,295)
     this.WAIa4.size(225)
     
     this.WAIa5 = createButton("UK");
     this.WAIa5.position(425,325)
     this.WAIa5.size(225)
     this.WAIa6= createButton("SAUDI ARABIA")
     this.WAIa6.position(425,355)
     this.WAIa6.size(225)

      
    
      
      this.WAIa6.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,335) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
         
       
      score =score + 1;
       this.WAIquestion2.hide();

       this.WAIa6.hide()
       this.WAIa5.hide() 
       this.WAIa4.hide()
      
     
       this.WAIquestion3 = createElement("h2", "Q3. WHO WAS THE HEAD OF THE USSR DURING WORLD WAR II ?")
       this.WAIquestion3.position(350,200)
         
    
       this.WAIa7 = createButton("JOSEPH STALIN");
      this.WAIa7.position(425,295)
      this.WAIa7.size(225)
      
      this.WAIa8 = createButton("VLADMIR LENIN");
      this.WAIa8.position(425,325)
      this.WAIa8.size(225)
      this.WAIa9= createButton("DMITRY MEDVEDEV")
      this.WAIa9.position(425,355)
      this.WAIa9.size(225)
      
        
      this.WAIa7.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,275) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
         
       
        score =score + 1;
         this.WAIquestion3.hide();

         this.WAIa9.hide()
         this.WAIa8.hide() 
         this.WAIa7.hide()
        
       
         this.WAIquestion4 = createElement("h2", "Q4. WHICH CITY IS THE LEGISLATIVE CAPITAL OF SOUTH AFRICA ?")
         this.WAIquestion4.position(350,200)
           
      
         this.WAIa10 = createButton("JOHANNESBURG");
        this.WAIa10.position(425,295)
        this.WAIa10.size(225)
        
        this.WAIa11 = createButton("CAPE TOWN");
        this.WAIa11.position(425,325)
        this.WAIa11.size(225)
        this.WAIa12= createButton("PRETORIA")
        this.WAIa12.position(425,355)
        this.WAIa12.size(225)
        

      
      
        this.WAIa11.mousePressed(()=>{
          this.correct9 = createElement("h4","CORRECT ANSWER")
          this.correct9.position(675,305) 
    
          this.next9 = createButton("NEXT")
          this.next9.position(750,575)
    
          this.next9.mousePressed(()=>{
    
            this.next9.hide()
          this.correct9.hide()
           
       
          score =score + 1;
           this.WAIquestion4.hide();

           this.WAIa10.hide()
           this.WAIa11.hide() 
           this.WAIa12.hide()
          
         
           this.WAIquestion5 = createElement("h2", "Q5. NAME THE PRIME MINISTER OF INDIA WHO IS BORN AFTER INDIA'S INDEPENDENCE ?")
           this.WAIquestion5.position(350,200)
             
        
           this.WAIa13 = createButton("MANMOHAN SINGH");
          this.WAIa13.position(425,295)
          this.WAIa13.size(225)
          
          this.WAIa14 = createButton("RAJIV GANDHI");
          this.WAIa14.position(425,325)
          this.WAIa14.size(225)
          this.WAIa15= createButton("NARENDRA MODI")
          this.WAIa15.position(425,355)
          this.WAIa15.size(225)


          this.WAIa15.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
            this.correct9.position(675,335) 
      
            this.next9 = createButton("NEXT")
            this.next9.position(750,575)
      
            this.next9.mousePressed(()=>{
      
              this.next9.hide()
            this.correct9.hide()
             
       
            score =score + 1;
             this.WAIquestion5.hide();

             this.WAIa13.hide()
             this.WAIa14.hide() 
             this.WAIa15.hide()
            
           
             this.WAIquestion6 = createElement("h2", "Q6. WHICH COUNTRY IS THE MOST POPULATED COUNTRY IN SOUTH AMERICA?")
             this.WAIquestion6.position(350,200)
               
          
             this.WAIa16 = createButton("PERU");
            this.WAIa16.position(425,295)
            this.WAIa16.size(225)
            
            this.WAIa17 = createButton("BRAZIL");
            this.WAIa17.position(425,325)
            this.WAIa17.size(225)
            this.WAIa18= createButton("CHILE")
            this.WAIa18.position(425,355)
            this.WAIa18.size(225)

       
      this.WAIa17.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,305) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
         
       
        score =score + 1;
         this.WAIquestion6.hide();

         this.WAIa18.hide()
         this.WAIa17.hide() 
         this.WAIa16.hide()
        
       
         this.WAIquestion7 = createElement("h2", "Q7. WHICH COUNTRY'S PRIME MINISTER IS JACINDA ARDEN ?")
         this.WAIquestion7.position(350,200)
           
      
         this.WAIa19 = createButton("NEW ZEALAND ");
        this.WAIa19.position(425,295)
        this.WAIa19.size(225)
        
        this.WAIa20 = createButton("GERMANY");
        this.WAIa20.position(425,325)
        this.WAIa20.size(225)
        this.WAIa21= createButton("AUSTRALIA")
        this.WAIa21.position(425,355)
        this.WAIa21.size(225)
       this.WAIa19.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,275) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
         
       
          score =score + 1;
           this.WAIquestion7.hide();

           this.WAIa21.hide()
           this.WAIa20.hide() 
           this.WAIa19.hide()
          
         
           this.WAIquestion8 = createElement("h2", "Q8. WHICH AIRLINE IS THE NATIONAL AIRLINE OF ITALY?")
           this.WAIquestion8.position(350,200)
             
        
           this.WAIa22 = createButton("EITHAD");
          this.WAIa22.position(425,295)
          this.WAIa22.size(225)
          
          this.WAIa23 = createButton("QUANTAS");
          this.WAIa23.position(425,325)
          this.WAIa23.size(225)
          this.WAIa24= createButton("ALITALIA")
          this.WAIa24.position(425,355)
          this.WAIa24.size(225)

       this.WAIa24.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,335) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
          
     
      score =score + 1;
       this.WAIquestion8.hide();
      
       
       this.WAIquestion9 = createElement("h2", "Q9. WHO IS THE SECRETARY - GENERAL OF THE UN  ?")
       this.WAIquestion9.position(350,200)
    
         this.WAIa22.hide()
         this.WAIa23.hide() 
         this.WAIa24.hide()
        
      
           
      
        this.WAIa25 = createButton("KOFI ANNAN");
        this.WAIa25.position(425,295)
        this.WAIa25.size(225)
        
        this.WAIa26 = createButton("António Guterres");
        this.WAIa26.position(425,325)
        this.WAIa26.size(225)
        this.WAIa27= createButton("BAN KI MOON")
        this.WAIa27.position(425,355)
        this.WAIa27.size(225) 

       this.WAIa26.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,305) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
        
      
      score =score + 1;
       this.WAIquestion9.hide();
       
       this.WAIa25.hide();
       this.WAIa26.hide()
       this.WAIa27.hide()
       this.WAIquestion10 = createElement("h2", "Q10. IF NASA IS FOR US, THEN WHAT IS FOR JAPAN ?")
       this.WAIquestion10.position(350,200)
      
       this.WAIa28 = createButton("Roscosmos");
       this.WAIa28.position(425,295)
       this.WAIa28.size(225)
       
       this.WAIa29 = createButton("CNSA");
       this.WAIa29.position(425,325)
       this.WAIa29.size(225)
       this.WAIa30= createButton("JAXA")
       this.WAIa30.position(425,355)
       this.WAIa30.size(225) 

       this.WAIa30.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,335) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
      
        this.thanks = createElement("h2", "THANKS FOR PLAYING")
        this.thanks.position(650,350)

        this.back = createButton("BACK")
        this.back.position(900,550)
        this.WAIa28.hide();
        this.WAIa29.hide()
        this.WAIa30.hide()
        this.WAIquestion10.hide()
        this.WAIans.hide();
        this.back.mousePressed(()=>{
       this.back.hide()
       this.thanks.hide()
        

        this.topic.show()

        this.button2.show();
        this.button3.show();
        this.button4.show();

        })
        
      })
    })
  })
})
        })
      })
    })
  })
        })
      })    


       })
        
 


      })

  

        
      });

        
      });

        
      });

        
      });

        
      });

        
      });

      
      
      });
    
  });

})
})



this.button4.mousePressed(()=>{
      
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();
  this.topic.hide();
  


  this.subtopic2 = createElement("h3","SUB TOPIC:")
  this.subtopic2.position(450,250)

  this.button11 = createButton("ARITHMETIC");
  this.button11.position(450,325);
  this.button11.size(100);

  this.button12 = createButton("STATISTICS")
  this.button12.position(450,375);
  this.button12.size(100);
 
  this.button13 = createButton("FACTUAL")
  this.button13.position(450,425)
  this.button13.size(100);

  this.button11.mousePressed(() =>{
    //score = 0;
     //this.points = createElement("h4", "SCORE = " +score)
     //this.points.position(800,250)
    
     this.subtopic2.hide();
     
    this.input.hide();
     this.button11.hide();
     this.button12.hide();
     this.button13.hide();
     
     
     

     this.tIquestion1 = createElement("h2", "Q1. WHAT IS THE VALUE OF X IF X SQUARE = 441?")
     this.tIquestion1.position(350,200)

     this.tIans = createElement("h2","ANS : ")
     this.tIans.position(350,275)
     
     this.tIa3 = createButton("23");
     this.tIa3.position(425,295)
     this.tIa3.size(225)
    
     this.tIa2 = createButton("29");
     this.tIa2.position(425,325)
     this.tIa2.size(225)
     this.tIa1 = createButton("21")
     this.tIa1.position(425,355)
     this.tIa1.size(225)

     
     this.tIa1.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
      
      this.tIa1.hide()
      this.tIa2.hide() 
      this.tIa3.hide()
     
      this.tIquestion1.hide();
      
      
      this.tIquestion2 = createElement("h2", "Q2. THE TOTAL OF THE FIRST 8 PRIME NUMBERS IS ?")
      this.tIquestion2.position(350,200)
      this.tIa4 = createButton("77");
     this.tIa4.position(425,295)
     this.tIa4.size(225)
     
     this.tIa5 = createButton("100");
     this.tIa5.position(425,325)
     this.tIa5.size(225)
     this.tIa6= createButton("79")
     this.tIa6.position(425,355)
     this.tIa6.size(225)

      
    
      
      this.tIa4.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,275) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
         
       
      
       this.tIquestion2.hide();

       this.tIa6.hide()
       this.tIa5.hide() 
       this.tIa4.hide()
      
     
       this.tIquestion3 = createElement("h2", "Q3. WHEN JOHN WAS 12 YEARS OLD, HIS FATHER WAS 3 TIMES HIS AGE. WHEN JOHN WAS 44 YEARS OLD THEN WHAT WILL BE HIS FATHER'S AGE ?")
       this.tIquestion3.position(350,200)
         
    
       this.tIa7 = createButton("88");
      this.tIa7.position(425,295)
      this.tIa7.size(225)
      
      this.tIa8 = createButton("73");
      this.tIa8.position(425,325)
      this.tIa8.size(225)
      this.tIa9= createButton("68")
      this.tIa9.position(425,355)
      this.tIa9.size(225)
      
        
      this.tIa9.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
       
        
         this.tIquestion3.hide();

         this.tIa9.hide()
         this.tIa8.hide() 
         this.tIa7.hide()
        
       
         this.tIquestion4 = createElement("h2", "Q4. IF 9 = 3, 6 = 2, 15 = 5, THEN WHAT IS FOR 48 ?")
         this.tIquestion4.position(350,200)
           
      
         this.tIa10 = createButton("16");
        this.tIa10.position(425,295)
        this.tIa10.size(225)
        
        this.tIa11 = createButton("20");
        this.tIa11.position(425,325)
        this.tIa11.size(225)
        this.tIa12= createButton("24")
        this.tIa12.position(425,355)
        this.tIa12.size(225)
        

      
      
        this.tIa10.mousePressed(()=>{
          this.correct9 = createElement("h4","CORRECT ANSWER")
          this.correct9.position(675,275) 
    
          this.next9 = createButton("NEXT")
          this.next9.position(750,575)
    
          this.next9.mousePressed(()=>{
    
            this.next9.hide()
          this.correct9.hide()
           
       
          
           this.tIquestion4.hide();

           this.tIa10.hide()
           this.tIa11.hide() 
           this.tIa12.hide()
          
         
           this.tIquestion5 = createElement("h2", "Q5. Simplify : 3 + 6 (5 + 4) ÷ 3 - 7   ?")
           this.tIquestion5.position(350,200)
             
        
           this.tIa13 = createButton("20");
          this.tIa13.position(425,295)
          this.tIa13.size(225)
          
          this.tIa14 = createButton("14");
          this.tIa14.position(425,325)
          this.tIa14.size(225)
          this.tIa15= createButton("27")
          this.tIa15.position(425,355)
          this.tIa15.size(225)


          this.tIa14.mousePressed(()=>{
            this.correct9 = createElement("h4","CORRECT ANSWER")
            this.correct9.position(675,305) 
      
            this.next9 = createButton("NEXT")
            this.next9.position(750,575)
      
            this.next9.mousePressed(()=>{
      
              this.next9.hide()
            this.correct9.hide()
          
       
            
             this.tIquestion5.hide();

             this.tIa13.hide()
             this.tIa14.hide() 
             this.tIa15.hide()
            
           
             this.tIquestion6 = createElement("h2", "Q6. WHICH FAMOUS MATHEMATICIAN INVENTED 0 ?")
             this.tIquestion6.position(350,200)
               
          
             this.tIa16 = createButton("EUCLID");
            this.tIa16.position(425,295)
            this.tIa16.size(225)
            
            this.tIa17 = createButton("HERON");
            this.tIa17.position(425,325)
            this.tIa17.size(225)
            this.tIa18= createButton("ARYABHATTA")
            this.tIa18.position(425,355)
            this.tIa18.size(225)

       
      this.tIa18.mousePressed(()=>{
       
        this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
      
         this.tIquestion6.hide();

         this.tIa18.hide()
         this.tIa17.hide() 
         this.tIa16.hide()
        
       
         this.tIquestion7 = createElement("h2", "Q7. WHICH NUMBER IS NOT A NATURAL NUMBER ?")
         this.tIquestion7.position(350,200)
           
      
         this.tIa19 = createButton("0");
        this.tIa19.position(425,295)
        this.tIa19.size(225)
        
        this.tIa20 = createButton("1");
        this.tIa20.position(425,325)
        this.tIa20.size(225)
        this.tIa21= createButton("2")
        this.tIa21.position(425,355)
        this.tIa21.size(225)
       this.tIa19.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,275) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
       
          
           this.tIquestion7.hide();

           this.tIa21.hide()
           this.tIa20.hide() 
           this.tIa19.hide()
          
         
           this.tIquestion8 = createElement("h2", "Q8. HOW MANY ZEROS ARE THERE IN ONE TRILLION  ?")
           this.tIquestion8.position(350,200)
             
        
           this.tIa22 = createButton("15");
          this.tIa22.position(425,295)
          this.tIa22.size(225)
          
          this.tIa23 = createButton("12");
          this.tIa23.position(425,325)
          this.tIa23.size(225)
          this.tIa24= createButton("9")
          this.tIa24.position(425,355)
          this.tIa24.size(225)

       this.tIa23.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,305) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
          
     
      
       this.tIquestion8.hide();
      
       
       this.tIquestion9 = createElement("h2", "Q9. HOW MANY KILOGRAMS ARE THERE IN A TON ?")
       this.tIquestion9.position(350,200)
    
         this.tIa22.hide()
         this.tIa23.hide() 
         this.tIa24.hide()
        
      
           
      
        this.tIa25 = createButton("100");
        this.tIa25.position(425,295)
        this.tIa25.size(225)
        
        this.tIa26 = createButton("10");
        this.tIa26.position(425,325)
        this.tIa26.size(225)
        this.tIa27= createButton("1000")
        this.tIa27.position(425,355)
        this.tIa27.size(225) 

       this.tIa27.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,335) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
      
      
      
       this.tIquestion9.hide();
       
       this.tIa25.hide();
       this.tIa26.hide()
       this.tIa27.hide()
       this.tIquestion10 = createElement("h2", "Q10. WHICH NUMBER IS KNOWN AS THE RAMANUJAN NUMBER ?")
       this.tIquestion10.position(350,200)
      
       this.tIa28 = createButton("1729");
       this.tIa28.position(425,295)
       this.tIa28.size(225)
       
       this.tIa29 = createButton("20849");
       this.tIa29.position(425,325)
       this.tIa29.size(225)
       this.tIa30= createButton("86578")
       this.tIa30.position(425,355)
       this.tIa30.size(225) 

       this.tIa28.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,275) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
      
        this.thanks = createElement("h2", "THANKS FOR PLAYING")
        this.thanks.position(650,350)

        this.back = createButton("BACK")
        this.back.position(900,550)
        this.tIa28.hide();
        this.tIa29.hide()
        this.tIa30.hide()
        this.tIquestion10.hide()
        this.tIans.hide();
        this.back.mousePressed(()=>{
       this.back.hide()
       this.thanks.hide()
       

        this.topic.show()

        this.button2.show();
        this.button3.show();
        this.button4.show();

        })
        
        


       })
        
 


      })

    })
  })
})
       })
      })
    })
  })
})
            })
          })
      
        
      });

        
      });

        
    })

        
      

        
      });




        
      });

      
      
      });

    });
    
  });

})
this.button12.mousePressed(() =>{
  //score = 0;
   //this.points = createElement("h4", "SCORE = " +score)
   //this.points.position(800,250)
  
   this.subtopic2.hide();
   
  this.input.hide();
   this.button11.hide();
   this.button12.hide();
   this.button13.hide();
   
   
   

   this.rAIquestion1 = createElement("h2", "Q1. HOW MANY QUADRANTS ARE THERE IN A GRAPH?")
   this.rAIquestion1.position(350,200)

   this.rAIans = createElement("h2","ANS : ")
   this.rAIans.position(350,275)
   
   this.rAIa3 = createButton("1");
   this.rAIa3.position(425,295)
   this.rAIa3.size(225)
  
   this.rAIa2 = createButton("2");
   this.rAIa2.position(425,325)
   this.rAIa2.size(225)
   this.rAIa1 = createButton("4")
   this.rAIa1.position(425,355)
   this.rAIa1.size(225)

   
   this.rAIa1.mousePressed(()=>{
    this.correct9 = createElement("h4","CORRECT ANSWER")
    this.correct9.position(675,335) 

    this.next9 = createButton("NEXT")
    this.next9.position(750,575)

    this.next9.mousePressed(()=>{

      this.next9.hide()
    this.correct9.hide()
  
   
    
    this.rAIa1.hide()
    this.rAIa2.hide() 
    this.rAIa3.hide()
   
    this.rAIquestion1.hide();
    
    
    this.rAIquestion2 = createElement("h2", "Q2. THREE UNBIASED COINS ARE TOSSED. WHAT IS THE PROBABILITY OF GETTING AT MOST TWO TAILS ?")
    this.rAIquestion2.position(350,200)
    this.rAIa4 = createButton("7/8");
   this.rAIa4.position(425,295)
   this.rAIa4.size(225)
   
   this.rAIa5 = createButton("1/4");
   this.rAIa5.position(425,325)
   this.rAIa5.size(225)
   this.rAIa6= createButton("3/4")
   this.rAIa6.position(425,355)
   this.rAIa6.size(225)

    
  
    
    this.rAIa4.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,275) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
       
     
    
     this.rAIquestion2.hide();

     this.rAIa6.hide()
     this.rAIa5.hide() 
     this.rAIa4.hide()
    
   
     this.rAIquestion3 = createElement("h2", "Q3. WHAT IS 7/11 OF 220 ?")
     this.rAIquestion3.position(350,200)
       
  
     this.rAIa7 = createButton("20");
    this.rAIa7.position(425,295)
    this.rAIa7.size(225)
    
    this.rAIa8 = createButton("140");
    this.rAIa8.position(425,325)
    this.rAIa8.size(225)
    this.rAIa9= createButton("210")
    this.rAIa9.position(425,355)
    this.rAIa9.size(225)
    
      
    this.rAIa8.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,305) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
     
      
       this.rAIquestion3.hide();

       this.rAIa9.hide()
       this.rAIa8.hide() 
       this.rAIa7.hide()
      
     
       this.rAIquestion4 = createElement("h2", "Q4. WHAT IS THE AVERAGE OF THE FIRST 50 NATURAL NUMBERS ?")
       this.rAIquestion4.position(350,200)
         
    
       this.rAIa10 = createButton("25.00");
      this.rAIa10.position(425,295)
      this.rAIa10.size(225)
      
      this.rAIa11 = createButton("40.00");
      this.rAIa11.position(425,325)
      this.rAIa11.size(225)
      this.rAIa12= createButton("25.30")
      this.rAIa12.position(425,355)
      this.rAIa12.size(225)
      

    
    
      this.rAIa12.mousePressed(()=>{
        this.correct9 = createElement("h4","CORRECT ANSWER")
        this.correct9.position(675,335) 
  
        this.next9 = createButton("NEXT")
        this.next9.position(750,575)
  
        this.next9.mousePressed(()=>{
  
          this.next9.hide()
        this.correct9.hide()
      
     
      
         this.rAIquestion4.hide();

         this.rAIa10.hide()
         this.rAIa11.hide() 
         this.rAIa12.hide()
        
       
         this.rAIquestion5 = createElement("h2", "Q5. PIE CHART IS ALSO KNOWN AS ?")
         this.rAIquestion5.position(350,200)
           
      
         this.rAIa13 = createButton("BAR GRAPH");
        this.rAIa13.position(425,295)
        this.rAIa13.size(225)
        
        this.rAIa14 = createButton("CIRCLE GRAPH");
        this.rAIa14.position(425,325)
        this.rAIa14.size(225)
        this.rAIa15= createButton("HISTOGRAM")
        this.rAIa15.position(425,355)
        this.rAIa15.size(225)


        this.rAIa14.mousePressed(()=>{
          this.correct9 = createElement("h4","CORRECT ANSWER")
          this.correct9.position(675,305) 
    
          this.next9 = createButton("NEXT")
          this.next9.position(750,575)
    
          this.next9.mousePressed(()=>{
    
            this.next9.hide()
          this.correct9.hide()
         
     
          
           this.rAIquestion5.hide();

           this.rAIa13.hide()
           this.rAIa14.hide() 
           this.rAIa15.hide()
          
         
           this.rAIquestion6 = createElement("h2", "Q6. HOW MANY DECADES ARE THERE IN A MILLENIUM ?")
           this.rAIquestion6.position(350,200)
             
        
           this.rAIa16 = createButton("100");
          this.rAIa16.position(425,295)
          this.rAIa16.size(225)
          
          this.rAIa17 = createButton("1000");
          this.rAIa17.position(425,325)
          this.rAIa17.size(225)
          this.rAIa18= createButton("10")
          this.rAIa18.position(425,355)
          this.rAIa18.size(225)

     
    this.rAIa16.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,275) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
     
    
       this.rAIquestion6.hide();

       this.rAIa18.hide()
       this.rAIa17.hide() 
       this.rAIa16.hide()
      
     
       this.rAIquestion7 = createElement("h2", "Q7. HOW MANY DEGREES ARE THERE IN A STRAIGHT ANGLE ?")
       this.rAIquestion7.position(350,200)
         
    
       this.rAIa19 = createButton("45");
      this.rAIa19.position(425,295)
      this.rAIa19.size(225)
      
      this.rAIa20 = createButton("90");
      this.rAIa20.position(425,325)
      this.rAIa20.size(225)
      this.rAIa21= createButton("180")
      this.rAIa21.position(425,355)
      this.rAIa21.size(225)
     this.rAIa21.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
     
        
         this.rAIquestion7.hide();

         this.rAIa21.hide()
         this.rAIa20.hide() 
         this.rAIa19.hide()
        
       
         this.rAIquestion8 = createElement("h2", "Q8. WHAT IS THE FORMULA OF FINDING THE AREA OF A SQUARE ?")
         this.rAIquestion8.position(350,200)
           
      
         this.rAIa22 = createButton("4 x S");
        this.rAIa22.position(425,295)
        this.rAIa22.size(225)
        
        this.rAIa23 = createButton("L x B");
        this.rAIa23.position(425,325)
        this.rAIa23.size(225)
        this.rAIa24= createButton("S x S")
        this.rAIa24.position(425,355)
        this.rAIa24.size(225)

     this.rAIa24.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
   
    
     this.rAIquestion8.hide();
    
     
     this.rAIquestion9 = createElement("h2", "Q9. WHICH NUMBER IS THE SMALLEST 9 DIGIT NUMBER WITH TWO DIFFERENT DIGITS ?")
     this.rAIquestion9.position(350,200)
  
       this.rAIa22.hide()
       this.rAIa23.hide() 
       this.rAIa24.hide()
      
    
         
    
      this.rAIa25 = createButton("100,000,000");
      this.rAIa25.position(425,295)
      this.rAIa25.size(225)
      
      this.rAIa26 = createButton("100,000,002");
      this.rAIa26.position(425,325)
      this.rAIa26.size(225)
      this.rAIa27= createButton("100,000,003")
      this.rAIa27.position(425,355)
      this.rAIa27.size(225) 

     this.rAIa25.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,275) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
    
    
     this.rAIquestion9.hide();
     
     this.rAIa25.hide();
     this.rAIa26.hide()
     this.rAIa27.hide()
     this.rAIquestion10 = createElement("h2", "Q10. WHICH FRACTION IS THE LARGEST ?")
     this.rAIquestion10.position(350,200)
    
     this.rAIa28 = createButton("7/11");
     this.rAIa28.position(425,295)
     this.rAIa28.size(225)
     
     this.rAIa29 = createButton("9/12");
     this.rAIa29.position(425,325)
     this.rAIa29.size(225)
     this.rAIa30= createButton("11/15")
     this.rAIa30.position(425,355)
     this.rAIa30.size(225) 

     this.rAIa29.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,305) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
      this.thanks = createElement("h2", "THANKS FOR PLAYING")
      this.thanks.position(650,350)

      this.back = createButton("BACK")
      this.back.position(900,550)
      this.rAIa28.hide();
      this.rAIa29.hide()
      this.rAIa30.hide()
      this.rAIquestion10.hide()
      this.rAIans.hide();
      this.back.mousePressed(()=>{
     this.back.hide()
     this.thanks.hide()
     

      this.topic.show()

      this.button2.show();
      this.button3.show();
      this.button4.show();

      
      })
      


     })
      
    })
  })
})
      })
    })
  })
})
      })
    })
  })






      
    });

      
    });
  })
      
    });

      
    });

      
    });

      
    });

    
    
    });
  
});

})


this.button13.mousePressed(() =>{
//score = 0;
//this.points = createElement("h4", "SCORE = " +score)
//this.points.position(800,250)

this.subtopic2.hide();

this.input.hide();
this.button11.hide();
this.button12.hide();
this.button13.hide();




this.xWAIquestion1 = createElement("h2", "Q1. WHICH NUMBER IS THE LARGEST SINGLE DIGIT PRIME NUMBER?")
this.xWAIquestion1.position(350,200)

this.xWAIans = createElement("h2","ANS : ")
this.xWAIans.position(350,275)

this.xWAIa3 = createButton("8");
this.xWAIa3.position(425,295)
this.xWAIa3.size(225)

this.xWAIa2 = createButton("7");
this.xWAIa2.position(425,325)
this.xWAIa2.size(225)
this.xWAIa1 = createButton("9")
this.xWAIa1.position(425,355)
this.xWAIa1.size(225)


this.xWAIa2.mousePressed(()=>{
  this.correct9 = createElement("h4","CORRECT ANSWER")
  this.correct9.position(675,305) 

  this.next9 = createButton("NEXT")
  this.next9.position(750,575)

  this.next9.mousePressed(()=>{

    this.next9.hide()
  this.correct9.hide()



this.xWAIa1.hide()
this.xWAIa2.hide() 
this.xWAIa3.hide()

this.xWAIquestion1.hide();


this.xWAIquestion2 = createElement("h2", "Q2. WHAT IS THE SQUARE OF 99 ?")
this.xWAIquestion2.position(350,200)
this.xWAIa4 = createButton("9801");
this.xWAIa4.position(425,295)
this.xWAIa4.size(225)

this.xWAIa5 = createButton("9999");
this.xWAIa5.position(425,325)
this.xWAIa5.size(225)
this.xWAIa6= createButton("9900")
this.xWAIa6.position(425,355)
this.xWAIa6.size(225)




this.xWAIa4.mousePressed(()=>{
  this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,275) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
 

 this.xWAIquestion2.hide();

 this.xWAIa6.hide()
 this.xWAIa5.hide() 
 this.xWAIa4.hide()


 this.xWAIquestion3 = createElement("h2", "Q3. WHICH YEAR WAS THE FIRST YEAR OF THE NINETEENTH CENTURY ?")
 this.xWAIquestion3.position(350,200)
   

 this.xWAIa7 = createButton("1900");
this.xWAIa7.position(425,295)
this.xWAIa7.size(225)

this.xWAIa8 = createButton("1901");
this.xWAIa8.position(425,325)
this.xWAIa8.size(225)
this.xWAIa9= createButton("1801")
this.xWAIa9.position(425,355)
this.xWAIa9.size(225)

  
this.xWAIa9.mousePressed(()=>{
  this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
 
  
   this.xWAIquestion3.hide();

   this.xWAIa9.hide()
   this.xWAIa8.hide() 
   this.xWAIa7.hide()
  
 
   this.xWAIquestion4 = createElement("h2", "Q4. WHICH NUMBER IS THE 2ND FIBONNACI NUMBER ?")
   this.xWAIquestion4.position(350,200)
     

   this.xWAIa10 = createButton("2");
  this.xWAIa10.position(425,295)
  this.xWAIa10.size(225)
  
  this.xWAIa11 = createButton("1");
  this.xWAIa11.position(425,325)
  this.xWAIa11.size(225)
  this.xWAIa12= createButton("3")
  this.xWAIa12.position(425,355)
  this.xWAIa12.size(225)
  



  this.xWAIa11.mousePressed(()=>{
    this.correct9 = createElement("h4","CORRECT ANSWER")
    this.correct9.position(675,305) 

    this.next9 = createButton("NEXT")
    this.next9.position(750,575)

    this.next9.mousePressed(()=>{

      this.next9.hide()
    this.correct9.hide()
  
 
    
     this.xWAIquestion4.hide();

     this.xWAIa10.hide()
     this.xWAIa11.hide() 
     this.xWAIa12.hide()
    
   
     this.xWAIquestion5 = createElement("h2", "Q5. WHICH NUMBER IS THE SMALLEST NUMBER TO HAVE AN 'A' IN ITS ALPHABETICAL WORD  ?")
     this.xWAIquestion5.position(350,200)
       
  
     this.xWAIa13 = createButton("1");
    this.xWAIa13.position(425,295)
    this.xWAIa13.size(225)
    
    this.xWAIa14 = createButton("100");
    this.xWAIa14.position(425,325)
    this.xWAIa14.size(225)
    this.xWAIa15= createButton("1000")
    this.xWAIa15.position(425,355)
    this.xWAIa15.size(225)


    this.xWAIa15.mousePressed(()=>{
      this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
 
    
       this.xWAIquestion5.hide();

       this.xWAIa13.hide()
       this.xWAIa14.hide() 
       this.xWAIa15.hide()
      
     
       this.xWAIquestion6 = createElement("h2", "Q6. WHAT COMES AFTER TRILLION?")
       this.xWAIquestion6.position(350,200)
         
    
       this.xWAIa16 = createButton("ZILLION");
      this.xWAIa16.position(425,295)
      this.xWAIa16.size(225)
      
      this.xWAIa17 = createButton("QUINTRILLION");
      this.xWAIa17.position(425,325)
      this.xWAIa17.size(225)
      this.xWAIa18= createButton("QUADRILLION")
      this.xWAIa18.position(425,355)
      this.xWAIa18.size(225)

 
this.xWAIa18.mousePressed(()=>{
  this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,335) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
 

   this.xWAIquestion6.hide();

   this.xWAIa18.hide()
   this.xWAIa17.hide() 
   this.xWAIa16.hide()
  
 
   this.xWAIquestion7 = createElement("h2", "Q7. GOOGLE IS NAMED AFTER WHICH NUMBER?")
   this.xWAIquestion7.position(350,200)
     

   this.xWAIa19 = createButton(" GOOGOL");
  this.xWAIa19.position(425,295)
  this.xWAIa19.size(225)
  
  this.xWAIa20 = createButton("SEPTRILLION");
  this.xWAIa20.position(425,325)
  this.xWAIa20.size(225)
  this.xWAIa21= createButton("SEXTRILLION")
  this.xWAIa21.position(425,355)
  this.xWAIa21.size(225)
 this.xWAIa19.mousePressed(()=>{
  this.correct9 = createElement("h4","CORRECT ANSWER")
      this.correct9.position(675,275) 

      this.next9 = createButton("NEXT")
      this.next9.position(750,575)

      this.next9.mousePressed(()=>{

        this.next9.hide()
      this.correct9.hide()
    
 
    
     this.xWAIquestion7.hide();

     this.xWAIa21.hide()
     this.xWAIa20.hide() 
     this.xWAIa19.hide()
    
   
     this.xWAIquestion8 = createElement("h2", "Q8. FROM WHICH COUNTRY IS EUCLID?")
     this.xWAIquestion8.position(350,200)
       
  
     this.xWAIa22 = createButton("EYGPT");
    this.xWAIa22.position(425,295)
    this.xWAIa22.size(225)
    
    this.xWAIa23 = createButton("GREECE");
    this.xWAIa23.position(425,325)
    this.xWAIa23.size(225)
    this.xWAIa24= createButton("ROME")
    this.xWAIa24.position(425,355)
    this.xWAIa24.size(225)

 this.xWAIa23.mousePressed(()=>{
  this.correct9 = createElement("h4","CORRECT ANSWER")
  this.correct9.position(675,305) 

  this.next9 = createButton("NEXT")
  this.next9.position(750,575)

  this.next9.mousePressed(()=>{

    this.next9.hide()
  this.correct9.hide()


 this.xWAIquestion8.hide();

 
 this.xWAIquestion9 = createElement("h2", "Q9. WHO HAS THE WORLD RECORD OF SOLVING A 13 DIGIT MULTIPLE WITHIN 53 SECONDS  ?")
 this.xWAIquestion9.position(350,200)

   this.xWAIa22.hide()
   this.xWAIa23.hide() 
   this.xWAIa24.hide()
  

     

  this.xWAIa25 = createButton("ALBERT EINSTEIN");
  this.xWAIa25.position(425,295)
  this.xWAIa25.size(225)
  
  this.xWAIa26 = createButton("SHAKUNTALA DEVI");
  this.xWAIa26.position(425,325)
  this.xWAIa26.size(225)
  this.xWAIa27= createButton("RAMANUJAN")
  this.xWAIa27.position(425,355)
  this.xWAIa27.size(225) 

 this.xWAIa26.mousePressed(()=>{

  this.correct9 = createElement("h4","CORRECT ANSWER")
  this.correct9.position(675,305) 

  this.next9 = createButton("NEXT")
  this.next9.position(750,575)

  this.next9.mousePressed(()=>{

    this.next9.hide()
  this.correct9.hide()


 this.xWAIquestion9.hide();
 
 this.xWAIa25.hide();
 this.xWAIa26.hide()
 this.xWAIa27.hide()
 this.xWAIquestion10 = createElement("h2", "Q10. WHICH COUNTRY'S CURRENCY IS THE MOST VALUABLE CCURRENCY IN THE WORLD?")
 this.xWAIquestion10.position(350,200)

 this.xWAIa28 = createButton("UK");
 this.xWAIa28.position(425,295)
 this.xWAIa28.size(225)
 
 this.xWAIa29 = createButton("JAPAN");
 this.xWAIa29.position(425,325)
 this.xWAIa29.size(225)
 this.xWAIa30= createButton("KUWAIT")
 this.xWAIa30.position(425,355)
 this.xWAIa30.size(225) 

 this.xWAIa30.mousePressed(()=>{
  this.correct9 = createElement("h4","CORRECT ANSWER")
  this.correct9.position(675,335) 

  this.next9 = createButton("NEXT")
  this.next9.position(750,575)

  this.next9.mousePressed(()=>{

    this.next9.hide()
  this.correct9.hide()

  this.thanks = createElement("h2", "THANKS FOR PLAYING")
  this.thanks.position(650,350)

  this.back = createButton("BACK")
  this.back.position(900,550)
  this.xWAIa28.hide();
  this.xWAIa29.hide()
  this.xWAIa30.hide()
  this.xWAIquestion10.hide()
  this.xWAIans.hide();

  this.back.mousePressed(()=>{
 this.back.hide()
 this.thanks.hide()


  this.topic.show()

  this.button2.show();
  this.button3.show();
  this.button4.show();

  })
})
 })
})
 })
})
 })
})
 })
})  
  
  
 })

 })
  







  
});

  
});

  
});

  
});

  
});

  
});



});

});

})


    
});
  
    
  })

  })
      
})     



  } 
}
      