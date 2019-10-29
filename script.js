
function checkInput()
{
    $('.dog_btn').on('click',function(e)
    {
        if($('.num_of_img').val() <= 0 || $('.num_of_img').val() > 50)
        {
            alert("Number must from 1 - 50");
        }
        else
        {
            e.preventDefault();
            let numOfimage = $('.num_of_img').val();
            getMultipleDogImg(numOfimage);
        }
        
    });

    $('.rand_dog').on('click',function(e)
    {   
        if($('.breed_name').val() === "")
        {
            alert("input a breed type");
        }
        else
        {
            e.preventDefault();
            let breedName = $('.breed_name').val();
            console.log(breedName);
            getSingleRandomImg(breedName);
        }
    })
}

function getMultipleDogImg(num)
{
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(Response => Response.json())
        .then(function(ResponseJson) {
            console.log(ResponseJson)
            displayMultipleImage(ResponseJson);
        })
        .catch(error => {
            console.log('trigger');
            displayError(error);
        });
}

function getSingleRandomImg(breed)
{
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(Response => {
            if(Response.ok)
            {
                return Response.json();
            }
            throw new Error(Response.statusText);
        })   
        .then(ResponseJson => displayImage(ResponseJson))
        .catch(error => {
            console.log('trigger');
            displayError(error);
        });
}

function displayError(err)
{
    $('.error_msg').empty();
    $('.error_msg').append(`<h2 class="error_txt">Something went wrong! ${err.message} </h2>`);
    $('.error_msg').removeAttr('hidden');
}


function displayImage(jsonObj)
{
    $(".img_container").empty();
    $('.img_container').append(`<img src="${jsonObj.message}" class="dog_image" alt="image of a dog">`);
    $('.display').removeAttr('hidden');
}

function displayMultipleImage(jsonObj)
{
    $(".img_container").empty();
    jsonObj.message.forEach(function(elem){
        $('.img_container').append(`<img src="${elem}" class="dog_image multi" alt="image of dog">`);
       console.log(elem);
    });
    $('.display').removeAttr('hidden');
}

function ONLOAD() {
    checkInput();
}

$(ONLOAD());