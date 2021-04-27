// link for api for the api

//populate the data
//set variable for the user input

//prevent default info from populating

//document.ready function
$(()=>{
    //On click Function to search for the info
    $('form').on("submit",(event)=>{
        event.preventDefault()
        //input the users search 
        const userInput = $('input[type="text"]').val()
    
        
        
        console.log(userInput)
        async function getPokeData(){
            ///async await to grab data
            //fetch the data
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            //change the data to json data
            const data = await response.json()
            console.log(data);
            $('#pokeName').html(data.forms[0].name);
            $('#type').html(data.types[0].type.name);
            $('#dex').html(data.id)
            $('#pokeImage').attr("src",data.sprites.other["official-artwork"].front_default)
           
            if (data.types[0].type.name == 'normal'){
                $('#background').css("background-color","#aaaa99")
            }
            if (data.types[0].type.name == 'fire'){
                $('#background').css("background-color","#ff4422")
            }
            if (data.types[0].type.name == 'water'){
                $('#background').css("background-color","#3399ff")
            }
            if (data.types[0].type.name == 'electric'){
                $('#background').css("background-color","#ffcc33")
            }
            if (data.types[0].type.name == 'grass'){
                $('#background').css("background-color","#77cc55")
            }
            if (data.types[0].type.name == 'ice'){
                $('#background').css("background-color","#66ccff")
            }
            if (data.types[0].type.name == 'fighting'){
                $('#background').css("background-color","#bb5544")
            }
            if (data.types[0].type.name == 'poison'){
                $('#background').css("background-color","#aa5599")
            }
            if (data.types[0].type.name == 'ground'){
                $('#background').css("background-color","#fff3c4")
            }
            if (data.types[0].type.name == 'flying'){
                $('#background').css("background-color","#8899ff")
            }
            if (data.types[0].type.name == 'psychic'){
                $('#background').css("background-color","#ff5599")
            }
            if (data.types[0].type.name == 'bug'){
                $('#background').css("background-color","#909e1d")
            }
            if (data.types[0].type.name == 'rock'){
                $('#background').css("background-color","#bbaa66")
            }
            if (data.types[0].type.name == 'ghost'){
                $('#background').css("background-color","#484894")
            }
            if (data.types[0].type.name == 'dragon'){
                $('#background').css("background-color","#7766ee")
            }
            if (data.types[0].type.name == 'dark'){
                $('#background').css("background-color","#775544")
            }
            if (data.types[0].type.name == 'steel'){
                $('#background').css("background-color","#898997")
            }
            if (data.types[0].type.name == 'fairy'){
                $('#background').css("background-color","#ee99ee")
            }
            
            
            

        
        }
    
        
        getPokeData()

    
        
    })


    


})

