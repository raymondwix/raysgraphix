
function initializeApp() {

    const firebaseConfig = {
        apiKey: "AIzaSyBgeG3KjxSgVXMswB5ZT6Ets75Avgy0I_c",
        authDomain: "rays-graphix-f0c7b.firebaseapp.com",
        databaseURL: "https://rays-graphix-f0c7b-default-rtdb.firebaseio.com",
        projectId: "rays-graphix-f0c7b",
        storageBucket: "rays-graphix-f0c7b.appspot.com",
        messagingSenderId: "391625780481",
        appId: "1:391625780481:web:6b7b4dfa126feb5b2cbf00",
        measurementId: "G-YW271CBQDY"
      };
    
    
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const firestore= firebase.firestore()
    
    // Listen for form submit
    const form= document.getElementById('contactForm');
    form.addEventListener('submit', submitForm);
    const db = firestore.collection("ContactFormData");
    
    // Submit form
    function submitForm(e){
        e.preventDefault();
    
        //Get value
        var name = getInputVal('name');
        var company = getInputVal('company');
        var email = getInputVal('email');
        var phone = getInputVal('phone')
        var message = getInputVal('message');
    
        // Save message
        saveMessage(name, company, email, phone, message);
    
    
        // Show alert
        document.querySelector('.alert').style.display = 'block';
    
        // Hide alert after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        },3000);
    
        // Clear form
        document.getElementById('contactForm').reset();
    }
    
    // Function to get form value
    function getInputVal(id){
        return document.getElementById(id).value;
    }
    
    
    // Save message to firebase
    const saveMessage= function(name, company, email, phone, message){
        firestore.collection("ContactFormData").add({
            name,
            company,
            email,
            phone,
            message
        })
    }
    }