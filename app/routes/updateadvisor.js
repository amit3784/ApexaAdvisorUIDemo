import Route from '@ember/routing/route';

export default class UpdateAdvisorRoute extends Route {

  actions = {
   
    async submitForm(data){
      //Id
      var id=data.id;
      //FullName
      var fullname=data.fullName;
      //SIN
      var sin=data.sin;
      //PhoneNumber
      var phonenumber=data.phoneNumber;
      //Address
      var address=data.address;
      

      //Validations
      if (sin.length !== 9) {
        alert('SIN Number should be exactly 9 digits!');
      } else if (phonenumber.length !== 10) {
        alert('Phone number should be exactly 10 digits!');
      }
      else
      {
      
        //code goes here
        let formData = {
          Id: id,
          FullName: fullname,
          SIN: sin,
          PhoneNumber: phonenumber,
          Address: address,
        };
        try {
          let response = await fetch(
            'https://localhost:7179/api/Advisor/Update',
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            },
          );
  
          if (!response.ok) {
            alert(`Bad Request: ${error.message}`);
            throw new Error(`Bad Request: ${error.message}`);
          }
  
          let result = await response.json();
          alert('Successfully updated the advisor information!');
          
        } catch (error) {
          console.error('Error:', error);
        }
      
      }
    }
  }
  async model(params) {
    try {
      var myobject = {};
      myobject.id = params.id;
      let response = await fetch('https://localhost:7179/api/Advisor/GetById/'+params.id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        //body: JSON.stringify(myobject),
      });
      if (!response.ok) {
        alert('Bad request' + response.json());
      }
      let data = await response.json();

      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      // Handle the error appropriately in your app
    }
  }
}
