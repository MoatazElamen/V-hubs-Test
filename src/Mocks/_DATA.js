import faker from 'faker'
// sender{ primary Account . secondary account , address1 ,address2 , contact , phone number , city}
// consignee{ name , phone1 ,phone2 , contact , address1 , address2, reference number secondar account , city} 
// shipment (contents , N of pieces , weight , volumetric weight , total price , Delivary Type , Additional Information )

const utils={
    createShipContent:function(){
        let result = [];
        let Rundom = Math.floor(Math.random() * 7)
        for(let i = 0 ; i< Rundom ; i++){
            result.push(faker.commerce.productName)
        }
        return result
    },
    DelivaryTypeGen:function(){
        let arr  = ['package for package','partial delivary']
        return arr[Math.floor(Math.random() * arr.length)]
    }
}
const genShipsData = ()=>{
    let dataArr = [];
    for(let i = 0 ; i<50; i++){
        let temp = {
            sender:{
                primaryAccount:faker.finance.account(),
                secondaryAccount:faker.finance.account(),
                address1:faker.address.secondaryAddress(),
                address2:faker.address.secondaryAddress(),
                contact:faker.internet.userName(),
                phoneNumber:faker.phone.phoneNumber(),
                city:faker.address.city()
            },
            consignee:{
                name:faker.internet.userName(),
                phone1:faker.phone.phoneNumber(),
                phone2:faker.phone.phoneNumber(),
                contact:faker.name.findName(),
                address1:faker.address.secondaryAddress(),
                address2:faker.address.secondaryAddress(),
                refNumber:faker.phone.phoneNumber(),
                senderAccount:faker.finance.account(),
                city:faker.address.city()
            },
            // shipment (contents , N of pieces , weight , volumetric weight , total price , Delivary Type , Additional Information )
            shipmentData:{
                contents:utils.createShipContent(),
                nOfPieces: Math.floor(Math.random() *15),
                volumetricWeight:Math.floor(Math.random() *100),
                weight:Math.floor(Math.random() *100),
                totalPrice:Math.floor(Math.random() *20),
                delivaryType:utils.DelivaryTypeGen(),
                additionalInformation:faker.lorem.words(Math.floor(Math.random() *50))
            },
            createdAt:faker.date.past()
        }
        dataArr.push(temp)
    }

    return dataArr
}
export default genShipsData;

