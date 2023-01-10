import Button from "@components/ui/button/Button";

type CommentFormProps = {
  task: string;
};

const commonStyles =
  "bg-teriary-clr py-2 px-4 text-black font-bold hover:bg-secondary-clr hover:text-primary-clr text-sm";

export default function CommentForm({ task }: CommentFormProps) {
  return (
    <form className="mb-6">
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border-2 border-primary-clr ">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="px-0 w-full text-sm text-dark-text-clr border-0 placeholder-gray-600"
          placeholder="Write a comment..."
          required
          defaultValue={""}
        />
      </div>
      <Button title="Post comment" type="submit" className={`${commonStyles}`}>
        Post comment
      </Button>
    </form>
  );
}
