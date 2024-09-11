import { expect, type Locator, type Page } from '@playwright/test';


export class checkoutPage {
    readonly page : Page;
    readonly panierButon : Locator;
    readonly checkoutButon : Locator;
    readonly firstname : Locator;
    readonly lastname : Locator;
    readonly zipcode : Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;
    readonly checkoutContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.panierButon = page.locator("#shopping_cart_container");
        this.checkoutButon = page.locator("#checkout");
        this.firstname = page.locator("# first-name");
        this.lastname = page.locator("# last-name");
        this.zipcode = page.locator("# postal-code");
        this.continueButton = page.locator("#continue");
        this.cancelButton = page.locator("#cancel");
        this.checkoutContainer = page.locator("#checkout_complete_container");
        
    }

    async goto(link:string){
        await this.page.goto(link)
        
    }

    clickPanierButon(){
        this.panierButon.click();
    }

    async clickcheckoutButon(){
        await this.checkoutButon.click()
    }


    saisirFirstname(firstname: string){
        return this.firstname.fill(firstname);
    }


    saisirLastname(firstname: string){
        return this.firstname.fill(firstname);
    }

    saisirZipCode(zipcode: string){
        return this.zipcode.fill(zipcode);
    }

    async clickContinueButon(){
        await this.continueButton.click();
    }

    async clickCancelButon(){
        await this.cancelButton.click();
    }

}
