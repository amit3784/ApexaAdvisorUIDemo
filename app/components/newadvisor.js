import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';
export default class MyFormComponent extends Component {
  @action
  refreshForm() {
    this.refresh();
  }
  @action
  async submitForm(event) {
    event.preventDefault();
    //validation on input length
    if (event.target.sin.value.length !== 9) {
      alert('SIN Number should be exactly 9 digits!');
    } else if (event.target.phonenumber.value.length !== 10) {
      alert('Phone number should be exactly 10 digits!');
    } else {
      let formData = {
        fullname: event.target.fullname.value,
        sin: event.target.sin.value,
        phonenumber: event.target.phonenumber.value,
        address: event.target.address.value,
      };
      try {
        let response = await fetch(
          'https://localhost:7179/api/Advisor/Create',
          {
            method: 'POST',
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
        alert('Successfully created the advisor!');
        event.target.reset();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
