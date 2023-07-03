import {Button, Divider, ListContainer, PaymentListItem, SecondaryPage} from "../../index.js";

export default function PaymentPage() {
    return (
        <SecondaryPage title={'Paiement'}>
            <ListContainer title={"modes de paiements"}>
                <PaymentListItem
                    name={"Apple Pay"}
                    isActive={true}
                />
                <PaymentListItem
                    name={"Carte"}
                />
                <PaymentListItem
                    name={"Paypal"}
                />
            </ListContainer>

            <Divider margin={"36px"}/>

            <Button>
                Ajouter une carte
            </Button>
        </SecondaryPage>
    );
}