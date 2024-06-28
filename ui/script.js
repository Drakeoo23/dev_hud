$(()=>{
    window.addEventListener("message", (event)=>{
        let e = event.data

        if (e.action === "UpdateHud") {
            $(".hide").css({"display": "inline-flex"});
            $("#healthBar").css({"width": Math.round(e.health) + "%"});
            $("#hungerBar").css({"width": Math.round(e.hunger) + "%"});
            $("#thirstBar").css({"width": Math.round(e.thirst) + "%"});
            $("#armourBar").css({"width": Math.round(e.armour) + "%"});
            $('#civilid').text (e.civilid);
        }



        if (Math.round(e.health) >= 100) {
            $("#healthBar").css({"background-color": "rgba(79, 185, 114, 0.904)", "box-shadow": "1px 1px 10px rgba(64, 189, 106, 0.786)"})
            $(".fa-heart").css({"color": "rgba(255, 255, 255, 0.781)"})               
        } else if (Math.round(e.health) >= 50) {
            $("#healthBar").css({"background-color": "rgba(79, 185, 114, 0.904)", "box-shadow": "1px 1px 10px rgba(64, 189, 106, 0.786)"})
            $(".fa-heart").css({"color": "rgba(255, 255, 255, 0.781)"})   
        } else if (Math.round(e.health) >= 25) {
            $("#healthBar").css({"background-color": "rgba(64, 189, 106, 0.904)", "box-shadow": "1px 1px 10px rgba(64, 189, 106, 0.786)"})
            $(".fa-heart").css({"color": "rgba(255, 255, 255, 0.781)"})
            $('.fa-heart').fadeOut(100).fadeIn(100)             
        }

        if (Math.round(e.armour) >= 100) {
            $("#armourBar").css({"background-color": "rgb(255, 255, 255, 0.904)", "box-shadow": "1px 1px 10px rgba(255, 255, 255, 0.786)"})
            $(".fa-shield").css({"color": "white"})
            $("#armour").show(300)
            $("#iconarmour").show(300)                
        } else if (Math.round(e.armour) >= 50) {
            $("#armourBar").css({"background-color": "rgb(255, 255, 255, 0.904)", "box-shadow": "1px 1px 10px rgba(255, 255, 255, 0.786)"})
            $(".fa-shield").css({"color": "white"})   
        } else if (Math.round(e.armour) >= 25) {
            $("#armourBar").css({"background-color": "rgb(255, 255, 255, 0.904)", "box-shadow": "1px 1px 10px rgba(255, 255, 255, 0.786)"})
            $(".fa-shield").css({"color": "white"})
            $('.fa-shield').fadeOut(100).fadeIn(100)             
        } else if (Math.round(e.armour) <= 0) {
            $("#armour").hide(300)
            $("#iconarmour").hide(300) 
            $(".statushud2").hide(300)
        }

        if (Math.round(e.hunger) >= 100) {
            $("#hungerBar").css({"background-color": "rgb(199, 135, 40, 0.904)", "box-shadow": "1px 1px 10px rgba(199, 135, 40, 0.786)"})
            $(".fa-burger").css({"color": "white"})               
        } else if (Math.round(e.hunger) >= 50) {
            $("#hungerBar").css({"background-color": "rgb(199, 135, 40, 0.904)", "box-shadow": "1px 1px 10px rgba(199, 135, 40, 0.786)"})
            $(".fa-burger").css({"color": "white"})   
        } else if (Math.round(e.hunger) >= 0) {
            $("#hungerBar").css({"background-color": "rgb(199, 135, 40, 0.904)", "box-shadow": "1px 1px 10px rgba(199, 135, 40, 0.786)"})
            $(".fa-burger").css({"color": "white"})
            $('.fa-burger').fadeOut(100).fadeIn(100)             
        }

        if (Math.round(e.thirst) >= 100) {
            $("#thirstBar").css({"background-color": "rgb(52, 154, 194, 0.904)", "box-shadow": "1px 1px 10px rgba(52, 154, 194, 0.786)"})
            $(".fa-droplet").css({"color": "white"})               
        } else if (Math.round(e.thirst) >= 50) {
            $("#thirstBar").css({"background-color": "rgb(52, 154, 194, 0.904)", "box-shadow": "1px 1px 10px rgba(52, 154, 194, 0.786)"})
            $(".fa-droplet").css({"color": "white"})   
        } else if (Math.round(e.thirst) >= 0) {
            $("#thirstBar").css({"background-color": "rgb(52, 154, 194, 0.904)", "box-shadow": "1px 1px 10px rgba(52, 154, 194, 0.786)"})
            $(".fa-droplet").css({"color": "white"})
            $('.fa-droplet').fadeOut(100).fadeIn(100)             
        }

    })    
})