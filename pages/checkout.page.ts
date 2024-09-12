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
    readonly removeArticleButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.panierButon = page.locator("#shopping_cart_container");
        this.checkoutButon = page.locator("#checkout");
        this.firstname = page.locator("#first-name");
        this.lastname = page.locator("#last-name");
        this.zipcode = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        this.cancelButton = page.locator("#cancel");
        this.finishButton = page.locator("#finish");
        this.checkoutContainer = page.locator("#checkout_complete_container");
        this.removeArticleButton = page.locator("#remove-sauce-labs-backpack")
        
    }

    async goto(link:string){
        await this.page.goto(link)
        
    }

    clickPanierButon(){
        return this.panierButon.click();
    }

    async clickcheckoutButon(){
        return this.checkoutButon.click()
    }


    async saisirFirstname(firstname: string){
        await this.firstname.fill(firstname);
    }


    async saisirLastname(lastname: string){
        await this.lastname.fill(lastname);
    }

    async saisirZipCode(zipcode: string){
        await this.zipcode.fill(zipcode);
    }

    async clickContinueButon(){
        return this.continueButton.click();
    }

    async clickCancelButon(){
        return this.cancelButton.click();
    }

 

    async clickcheckoutlButon(){
        return this.checkoutButon.click();
    }

    async clickcfinishlButon(){
        return this.finishButton.click();
    }

    async clickcRemoveArticle(){
        return this.removeArticleButton.click();
    }
}
