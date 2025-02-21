import Month from "@/components/calendar/month";
import Year from "@/components/calendar/year/year";

export default function Calendar() {
  return (
    <div className="p-6 mt-16">
      {/* <Month /> */}
      <div className="mt-6">
        <Year />
      </div>
    </div>
  );
}
