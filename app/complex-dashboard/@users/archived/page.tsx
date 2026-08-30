import { Card } from "@/app/components/card";
import Link from "next/link";

export default function ArchivedUserAnalytics() {
  return (
    <Card>
      <div>User Analytics</div>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
