import PrimaryBtnVue from "../PrimaryBtn.vue";

it("testing primary button", () => {
    cy.mount(PrimaryBtnVue, {props: {content: "primary"}});
    let $Primary = cy.get("button");
    $Primary.contains("primary");
    $Primary.should("be.visible");
    $Primary.trigger("mouseover");
});
