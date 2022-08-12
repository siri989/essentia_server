function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "feeling confused") {
        return "Wanna see something cool";
    
    }
    else if (input == "sure") {
        return "check out the blog section for some inspiring content by our students!";
        
    }
    
    else if (input == "not interested") {
        return "why dont u get on hands on experience on innovative projects?check out the project section now!";
      
    }
    else if (input == "availability of internships?") {
        return "check out the internship section for more information genius";
      
    }
    
    else if (input == "okay thanks") {
        return "hope you find your inspiration. good luck fella!";
      
    }
    else {
        return "Try asking something else!";
    }

   
}