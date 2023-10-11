import { LightningElement,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getUrls from '@salesforce/apex/CustomMetadataController.getUrls';
//import COMPANY_LOGO from '@salesforce/resourceUrl/caanzcomlogo';
export default class MetaDataMobile extends NavigationMixin(LightningElement) {
    
    //companylogo=COMPANY_LOGO;
    Tools_Resources;My_CA;Acuity;ca_store;My_Membership;My_Learning;My_CA_Communities;My_Preferences;
    @wire(getUrls)
    getCustomURLs({error,data}){
        console.log('~~data : ',data);
        if(data){
            this.Tools_Resources=data.Tools_Resources;
            this.My_CA = data.My_CA;
            this.Acuity = data.Acuity;
            this.ca_store = data.ca_store;
            this.My_Membership=	data.My_Membership;
            this.My_Learning=data.My_Learning;
            this.My_Preferences= data.My_Preferences;
            this.My_CA_Communities=data.My_CA_Communities;
            

        }
        if(error){
            console.log('~~Error : ',error);
        }
   }
    handlecastore() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": this.ca_store  
            }
        });
    } 
    handlemyca() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": this.My_CA  
            }
        });
    }
    
    handletoolsr() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": this.Tools_Resources 
            }
        });
    } 
    handleacuity() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url":this.Acuity    
            }
        });
} 
    handlemembership() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": this.My_Membership 
                         
            }
        });
  
    } 
    handlelearning() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": My_Learning
            }
        });
  
    } 
    // handlelearning() {
    //     this[NavigationMixin.Navigate]({
    //         "type": "standard__webPage",
    //         "attributes": {
    //             "url": "https://preprod-dfd.charteredaccountantsanz.com/my-learning/my-learning"  
    //         }
    //     });
    // }
    
    handlemycom() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": this.My_CA_Communities  
            }
        });
  
    } 
    handlepreference() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": this.My_Preferences
            }
        });
  
    } 
}