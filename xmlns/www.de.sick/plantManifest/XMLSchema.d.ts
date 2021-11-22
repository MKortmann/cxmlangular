import * as Primitive from '../../xml-primitives';

// Source files:
// http://null/plant.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _PlantType extends BaseType {
	begin_bloom_date?: Date;
	bloom_color?: PlantTypeBloom_colorType;
	/** The name in native language */
	common_name?: string;
	/** Variety */
	cultivar?: string;
	edible?: boolean;
	end_bloom_date?: Date;
	/** Genus */
	genus: string;
	height?: number;
	species?: string;
	specimens?: PlantTypeSpecimensType;
	sun_tolerance?: PlantTypeSun_toleranceType;
}
interface PlantType extends _PlantType { constructor: { new(): PlantType }; }

type PlantTypeBloom_colorType = ("red" | "orange" | "yellow" | "blue" | "violet" | "white");
interface _PlantTypeBloom_colorType extends Primitive._string { content: PlantTypeBloom_colorType; }

type PlantTypeCommon_nameType = string;
type _PlantTypeCommon_nameType = Primitive._string;

type PlantTypeCultivarType = string;
type _PlantTypeCultivarType = Primitive._string;

type PlantTypeGenusType = string;
type _PlantTypeGenusType = Primitive._string;

type PlantTypeHeightType = number;
type _PlantTypeHeightType = Primitive._number;

interface _PlantTypeSpecimensType extends BaseType {
	specimen: specimenType[];
}
interface PlantTypeSpecimensType extends _PlantTypeSpecimensType { constructor: { new(): PlantTypeSpecimensType }; }

type PlantTypeSun_toleranceType = ("full_sun" | "part_sun" | "part_shade" | "full_shade");
interface _PlantTypeSun_toleranceType extends Primitive._string { content: PlantTypeSun_toleranceType; }

interface _specimenType extends BaseType {
	commens?: string;
	latitude?: number;
	longitude?: number;
	planted_by?: string;
}
export interface specimenType extends _specimenType { constructor: { new(): specimenType }; }
export var specimenType: { new(): specimenType };

type specimenTypeCommensType = string;
type _specimenTypeCommensType = Primitive._string;

type specimenTypePlanted_byType = string;
type _specimenTypePlanted_byType = Primitive._string;

export interface document extends BaseType {
	/** Root Element */
	plant: PlantType;
}
export var document: document;
