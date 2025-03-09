import Image from "next/image";

export function SupportWidget() {
  return (
    <div className="space-y-4 p-4 md:p-6 md:border border-gray-1 rounded-lg">
      <h3 className="font-medium text-lg">Help & Support Center</h3>
      <div className="space-y-4 text-sm sm:text-base">
        <button className="w-full text-left p-2 flex gap-2 items-center bg-offWhite hover:bg-foreground/20 duration-200 rounded-lg border border-white focus:bg-foreground/10 focus:border-foreground transition-colors">
          <span className="p-2.5 bg-foreground/10 rounded-lg">
            <Image alt="" src="/images/question.svg" width={20} height={20} />
          </span>
          Help Center
        </button>
        <button className="w-full text-left p-2 flex gap-2 items-center bg-offWhite hover:bg-foreground/20 duration-200 rounded-lg border border-white focus:bg-foreground/10 focus:border-foreground transition-colors">
          <span className="p-2.5 bg-foreground/10 rounded-lg">
            <Image
              alt=""
              src="/images/support-filled.svg"
              width={20}
              height={20}
            />
          </span>
          Product Feature Suggestion
        </button>
        <button className="w-full text-left p-2 flex gap-2 items-center bg-offWhite hover:bg-foreground/20 duration-200 rounded-lg border border-white focus:bg-foreground/10 focus:border-foreground transition-colors">
          <span className="p-2.5 bg-foreground rounded-lg">
            <Image alt="" src="/images/chat.svg" width={20} height={20} />
          </span>
          Chat with Support Now
        </button>
      </div>
    </div>
  );
}
