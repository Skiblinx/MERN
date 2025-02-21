import { FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control } = useFormContext()

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription>Add an image that will be displayed on your restuarant listing in the search results. Adding a new image will overwrite thhe existing one.</FormDescription>
      </div>

      <div className="flex flex-col gap-8 w-[50%]">
        <FormField control={control} name="imageField" render={({ field }) => (<FormItem>
          <FormControl>
            <Input className="bg-white" type="file" accept=".jpg .jpeg .png" onChange={(event) => field.onChange(event.target.files ? event.target.files[0] : null)} />
          </FormControl>
        </FormItem>
        )}
        />
      </div>
    </div>
  )
}

export default ImageSection;