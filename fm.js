function validation() {
    var username = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var address = document.getElementById('add').value;
    var address2 = document.getElementById('add2').value;
    var city = document.getElementById('City').value;
    var state = document.getElementById('state').value;
    var postalcode = document.getElementById('PC').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;
    var suggestion = document.getElementById('suggestion').value;
    var j1 = document.getElementById('title').value;
    var choice1 = document.getElementById("yes").checked;
    var choice2 = document.getElementById("no").checked;

    var usercheck = /^[A-Za-z. ]{3,30}$/;
    var usercheck2 = /^[A-Za-z. ]{3,30}$/;
    var usercheck3 = /^[#.0-9a-zA-Z\s,-]+$/;
    var usercheck4 = /^[#.0-9a-zA-Z\s,-]+$/;
    var usercheck5 = /^[a-zA-Z',.\s-]{1,25}$/;
    var usercheck6 = /^[a-zA-Z',.\s-]{1,25}$/;
    var usercheck7 = /^[A-Za-z. ]{3,30}$/;
    var usercheck8 = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var usercheck9 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var usercheck10 = /^[A-Za-z. ]{3,30}$/;


    if (usercheck.test(username)) {
        document.getElementById('usererror').innerHTML = " ";
    } else {
        document.getElementById('usererror').innerHTML = " **Firstname is Invalid ";

        return false;
    }

    if (usercheck2.test(lname)) {
        document.getElementById('lnameerror').innerHTML = " ";
    } else {
        document.getElementById('lnameerror').innerHTML = " **Lastname is Invalid ";

        return false;
    }

    if (usercheck3.test(address)) {
        document.getElementById('addresserror').innerHTML = " ";
    } else {
        document.getElementById('addresserror').innerHTML = " ** Address is invalid ";

        return false;
    }
    if (usercheck4.test(address2)) {
        document.getElementById('addresserror2').innerHTML = " ";
    } else {
        document.getElementById('addresserror2').innerHTML = " ** Address is invalid ";

        return false;
    }
    if (usercheck5.test(city)) {
        document.getElementById('cityerror').innerHTML = " ";
    } else {
        document.getElementById('cityerror').innerHTML = " ** Please enter a valid City ";

        return false;
    }
    if (usercheck6.test(state)) {
        document.getElementById('stateerror').innerHTML = " ";
    } else {
        document.getElementById('stateerror').innerHTML = " ** Please enter a valid State ";

        return false;
    }
    if (usercheck7.test(postalcode)) {
        document.getElementById('postalerror').innerHTML = " ";
    } else {
        document.getElementById('postalerror').innerHTML = " ** Please enter a valid Pincode ";

        return false;
    }
    if (usercheck8.test(phone)) {
        document.getElementById('phoneerror').innerHTML = " ";
    } else {
        document.getElementById('phoneerror').innerHTML = " ** Please enter a valid Phone Number ";

        return false;
    }
    if (usercheck9.test(email)) {
        document.getElementById('emailerror').innerHTML = " ";
    } else {
        document.getElementById('emailerror').innerHTML = " ** Please enter a valid Email id ";

        return false;
    }
    if (j1 == "select something") {
        alert("please select");
        return false;

    }
    if (usercheck10.test(feedback)) {
        document.getElementById('feedbackerror').innerHTML = " ";
    } else {
        document.getElementById('feedbackerror').innerHTML = " ** Please enter a Valid Feedback ";

        return false;
    }
    if (usercheck10.test(suggestion)) {
        document.getElementById('suggestionerror').innerHTML = " ";
    } else {
        document.getElementById('suggestionerror').innerHTML = " ** Please enter a Valid Suggestion ";

        return false;
    }
    if ((choice1 == "") && (choice2 == "")) {
        alert("choose one");
        return false;
    }
}