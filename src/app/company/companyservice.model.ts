export class Company{
  [x: string]: any;
  Id!: number;
  EmailId!:string;
  Name!:string;
  TotalEmployee!:Number;
  Address!:String;
  IsCompanyActive!:boolean;
  TotalBranch!:number;
  companyBranch!:Branch[];
};

 export class Branch{
   BranchId!: number;
   BranchName!: string;
   Address!:string;
 }
