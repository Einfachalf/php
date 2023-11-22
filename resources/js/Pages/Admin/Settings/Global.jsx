import Setting from "@/Components/Icons/Setting";
import { Head } from "@inertiajs/react";
import Breadcrumb from "@/Components/Breadcrumb";
import Dashboard from "@/Layouts/Dashboard";
import AddSocialLinks from "@/Components/AddSocialLinks";
import OpenAISetup from "@/Components/Forms/OpenAISetup";
import GlobalSettings from "@/Components/Forms/GlobalSettings";
import AWSSetup from "@/Components/Forms/AWSSetup";

const Global = (props) => {
   return (
      <>
         <Head title="Global Settings" />
         <Breadcrumb Icon={Setting} title="Global Settings" />

         <GlobalSettings app={props.app} />
         <OpenAISetup openaiKey={props.app.openai_key} />
         <AWSSetup app={props.app} />

         <AddSocialLinks socials={props.socials} />
      </>
   );
};

Global.layout = (page) => <Dashboard children={page} />;

export default Global;
