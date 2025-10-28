import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="fullname" placeholder="Jméno a příjmení" />
        <Input type="email" placeholder="Email" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="phone" placeholder="Telefon" />
          <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
              <SelectValue placeholder="Mám zájem o"></SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Mám zájem o</SelectLabel>
                <SelectItem value="construction">Montáž</SelectItem>
                <SelectItem value="renovation">Výroba</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* textarea */}
        <Textarea
          className="h-[180px] resize-none border-slate-200 active:border-accent focus:border-accent"
          placeholder="Napište nám zprávu"
        />
        {/* btn */}
        <Button text="Odeslat">Odeslat</Button>
      </div>
    </form>
  );
};

export default Form;
