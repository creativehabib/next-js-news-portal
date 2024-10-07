
interface CategoryFilterProps{
    onCategoryChange:(category: string) => void;
}
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const CategoryFilter = ({onCategoryChange}: CategoryFilterProps) => {
    const categories = ['all','country','politics','sports','business']
    return (
        <div className="flex gap-2 items-center justify-center px-4">
            <h4 className="font-bold text-lg flex-shrink-0">Filter by category:</h4>
            <Select onValueChange={(value) => onCategoryChange(value === 'all' ? '' : value)}>
                <SelectTrigger className="w-[160px] border rounded-md capitalize">
                    <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                    {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    );
};

export default CategoryFilter;