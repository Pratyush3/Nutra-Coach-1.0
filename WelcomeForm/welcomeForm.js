//First interface for the user

class welcomeForm{

    constructor(){

        this.input = createInput("Name");//The user will enter name
        this.button = createButton('Start');//Redirecting to the next form
        this.title = createElement('h2');//Title of the page
        this.greeting = createElement('h2');//Creates a greeting message
        this.user = createInput("Name");//Declaring the user
    }

    hide(){

        this.input.hide();//Hiding Input
        this.button.hide();//Hiding Button
        this.title.hide();//Hiding Title
        this.greeting.hide()//Hiding the greeting

    }

    display(){

        this.title.html("NutraCoach");//Displaying the title
        this.title.position(displayWidth/2 - 50,0);//Positioning title
        
        //Position of input
        this.input.position(displayWidth/2 - 40,displayWidth/2 - 80);

        //Position of button
        this.button.position(displayWidth/2 + 30,displayWidth/2);

        //Steps to be followed when mouse is pressed
        this.button.mousePressed(()=>{
            this.input.hide();//Hiding input as soon as button is pressed
            this.button.hide();//Hiding buuton
            // Giving the user a value
            this.user.name = this.input.value();
            //Printing a greeting message
            this.greeting.html("Hello "+this.user.name);
            
            //Position of the message
            this.greeting.position(displayWidth/2 - 40,displayWidth/4);
            
        });

    }

    
}