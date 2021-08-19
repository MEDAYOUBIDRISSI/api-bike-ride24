export class CreatePaypalInfoDTO
{
   readonly payer_id?:string;
   readonly given_name?:string;
   readonly surname?:string;
   readonly email_address?:string;
   readonly address:string[];
   readonly create_time?:string;
   readonly update_time?:string;
   readonly currency_code?:string;
   readonly value?:string;
   readonly merchant_id?:string;
}