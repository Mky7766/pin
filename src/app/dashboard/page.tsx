import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircle, MapPin, BarChart2 } from 'lucide-react';

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Dashboard
        </h1>
        <Button asChild>
          <Link href="/">
            <PlusCircle className="mr-2 h-4 w-4" />
            Drop New Pin
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pins Dropped</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              +5 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Pinned Country</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">India</div>
            <p className="text-xs text-muted-foreground">
              25 pins
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Pin Dropped</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Jaipur, Rajasthan</div>
            <p className="text-xs text-muted-foreground">
              2 hours ago
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
            <CardHeader>
                <CardTitle>Recent Pins</CardTitle>
                <CardDescription>A list of your most recently dropped pins.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold">Taj Mahal, Agra</p>
                            <p className="text-sm text-muted-foreground">1 day ago</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                    </li>
                    <li className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold">Golden Gate Bridge, San Francisco</p>
                            <p className="text-sm text-muted-foreground">3 days ago</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                    </li>
                    <li className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold">Eiffel Tower, Paris</p>
                            <p className="text-sm text-muted-foreground">1 week ago</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                    </li>
                </ul>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
