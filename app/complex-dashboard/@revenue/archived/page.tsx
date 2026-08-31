import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedRevenueMetrics() {
  return (
    <Card>
      <div>Archived Revenue</div>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
