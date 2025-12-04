import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export function CharacterCounter() {
  const [count, setCount] = useState({
    charCount: 0,
    wordCount: 0,
    sentenceCount: 0,
  });

  const countList = [
    {
      countTypeName: "Total Characters",
      countType: count.charCount,
    },
    {
      countTypeName: "Total Words",
      countType: count.wordCount,
    },
    {
      countTypeName: "Total Sentences",
      countType: count.sentenceCount,
    },
  ];

  return (
    <div className="max-w-[900px] m-auto">
      <div className="flex items-center justify-between p-1.5">
        <h4 className="text-2xl">Character Counter</h4>
        <Button>
          <Moon />
        </Button>
      </div>
      <div>
        <h1 className="text-[52px] font-bold w-[50%] text-center m-auto mt-10">
          Analyze your text in real-time.
        </h1>

        <div className="mt-5">
          <Textarea className="h-50" placeholder="Type your message here." />

          <div className="flex items-center gap-10 my-5">
            <div className="flex items-center gap-2.5">
              <Checkbox id="excludeSpaces" />
              <Label htmlFor="excludeSpaces">Exclude spaces</Label>
            </div>
            <div className="flex items-center gap-2.5">
              <Checkbox id="charLimit" />
              <Label htmlFor="charLimit">Set character limit</Label>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-10">
            {countList.map((item, index) => (
              <div key={index} className="w-4/12">
                <CharCount
                  countName={item.countTypeName}
                  countType={item.countType}
                />
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h4>Letter Density</h4>
            <p>No characters found.Start typing to get letters density.</p>
          </div>

          <div className="flex items-center gap-2.5 whitespace-nowrap mt-10 text-lg">
            <p>A</p>
            <Progress value={56} className="h-3" />
            <p>40 (16.90%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CharCount({ countName, countType }) {
  return (
    <div className="border-2 border-gray-40 p-5 rounded-lg">
      <h3 className="text-5xl font-bold">{countType}</h3>
      <p>{countName}</p>
    </div>
  );
}
