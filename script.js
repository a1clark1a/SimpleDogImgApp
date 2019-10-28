
function checkInput()
{
    $('.dog_btn').on('click',function(e)
    {
        if($('.num_of_img').val() <= 0)
        {
            alert("cannot be lower than 1");
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
        .catch(error => alert(error));
}

function getSingleRandomImg(breed)
{
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(Response => Response.json())
        .then(ResponseJson => displayImage(ResponseJson))
        .catch(error => alert(error));
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