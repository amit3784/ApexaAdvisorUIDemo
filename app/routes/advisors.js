import Route from '@ember/routing/route';
import { action } from '@ember/object';
import fetch from 'fetch';
export default class AdvisorsRoute extends Route {
  async model() {
    try {
      let response = await fetch('https://localhost:7179/api/Advisor/GetAll');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  actions = {
    async editAdvisor(id) {
      alert(id);
    },
    async deleteRecord(id) {
      let confirmation = confirm(
        'Are you sure you want to delete this record?',
      );
      if (confirmation) {
        try {
          var myobject = {};
          myobject.id = id;
          let response = await fetch(
            'https://localhost:7179/api/Advisor/Delete/'+id,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
             // body: JSON.stringify(myobject),
            },
          ).then((response) => {
            if (!response.ok) {
              alert('Bad request' + response.json());
            }
            let data = response.json();
            alert('successfully delete the record!');
            this.refresh();
            return data;
          });
        } catch (error) {
          console.error('Fetch error:', error);
          // Handle the error appropriately in your app
        }
      }
    },
  };
}
