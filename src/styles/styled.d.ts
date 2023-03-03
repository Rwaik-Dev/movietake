import "style-components";

declare module "style-components"{
    export interface DefaulTheme{
        title: string,
        colors: {
          backgrounColor: string,
          cardBackgroundColor: string,
          secondaryColor: string,
          buttonColor: string,
          terciaryColor: string,
      
          textColor: string,
          contrastTextColor: string,
        },
    }
}