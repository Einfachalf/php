import Card from "@/Components/Card";
import Input from "@/Components/Input";
import { useForm } from "@inertiajs/react";
import { Button } from "@material-tailwind/react";

const AWSSetup = ({ app }) => {
   const { aws_key, aws_secret } = app;

   const { data, setData, patch, errors, clearErrors } = useForm({
      aws_key,
      aws_secret,
   });

   const onHandleChange = (event) => {
      setData(event.target.name, event.target.value);
   };

   const submit = (e) => {
      e.preventDefault();
      clearErrors();
      patch(route("settings.aws"));
   };

   return (
      <Card className="max-w-[1000px] w-full mx-auto mb-7">
         <div className="px-7 pt-7 pb-4 border-b border-b-gray-200">
            <p className="text18 font-bold text-gray-900">AWS Poly Setup</p>
            <p className="text-xs text-red-300 italic mt-1">
               AWS feature like Text To Speech will not active without AWS Poly
               key and secret
            </p>
         </div>

         <form onSubmit={submit} className="p-7">
            <div className="grid grid-cols-1 gap-7">
               <Input
                  name="aws_key"
                  type="password"
                  label="AWS Key"
                  value={data.aws_key}
                  error={errors.aws_key}
                  onChange={onHandleChange}
                  placeholder="Enter aws credential key"
                  fullWidth
                  flexLabel
               />

               <Input
                  type="password"
                  name="aws_secret"
                  label="AWS Secret"
                  value={data.aws_secret}
                  error={errors.aws_secret}
                  onChange={onHandleChange}
                  placeholder="Enter aws credential secret"
                  fullWidth
                  flexLabel
               />
            </div>

            <div className="flex items-center mt-7 md:pl-[164px]">
               <Button
                  type="submit"
                  variant="text"
                  color="white"
                  className={`bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14`}
               >
                  Save Changes
               </Button>
            </div>
         </form>
      </Card>
   );
};

export default AWSSetup;
