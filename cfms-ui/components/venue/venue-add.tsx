import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function VenueAdd() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Add Venue</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Add New Venue</DialogTitle>
          <DialogDescription>
            Fill out the form to add a new venue to the list.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Venue Name</Label>
              <Input id="name" placeholder="Enter venue name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter venue address" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Enter city" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder="Enter state" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">Zip Code</Label>
              <Input id="zip" placeholder="Enter zip code" />
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Add Venue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default VenueAdd;
