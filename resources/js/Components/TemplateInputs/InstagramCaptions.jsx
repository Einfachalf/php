import TextArea from "@/Components/TextArea";

const InstagramCaptions = ({ data, errors, onHandleChange }) => {
    return (
        <div className="mt-6">
            <TextArea
                rows={4}
                name="details"
                value={data.details}
                label="What is your instragram post about?"
                placeholder="e.g. Describe your Instrgram post about"
                onChange={onHandleChange}
                maxLength={400}
                required
            />
        </div>
    );
};

export default InstagramCaptions;
