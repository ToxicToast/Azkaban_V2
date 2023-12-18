import { CategoryAggregate } from '../../src';
import { Nullable } from 'vitest';

describe('CategoryAggregate', () => {
  const id = '1';
  const parentId = null;
  const title = 'Category';
  const slug = 'category';
  const active = true;
  const createdAt = new Date();
  const updatedAt = null;
  const deletedAt = null;
  let aggregate: Nullable<CategoryAggregate> = null;

  beforeEach(() => {
    aggregate = new CategoryAggregate(
      id,
      parentId,
      title,
      slug,
      active,
      createdAt,
      updatedAt,
      deletedAt
    );
  });

  afterEach(() => {
    aggregate = null;
  });

  it('should be defined', () => {
    expect(aggregate).toBeDefined();
  });

  it('should be a CategoryAggregate instance', () => {
    expect(aggregate).toBeInstanceOf(CategoryAggregate);
  });

  it('should return the anemic', () => {
    expect(aggregate.toAnemic()).toStrictEqual({
      id,
      parent_id: parentId,
      title,
      slug,
      created_at: createdAt,
      updated_at: updatedAt,
      deleted_at: deletedAt,
      isActive: active,
      isParent: parentId === null,
      isChild: parentId !== null,
      isUpdated: !!updatedAt,
      isDeleted: !!deletedAt,
    });
  });

  it('should change the parent_id', () => {
    const newParentId = '2';
    expect(aggregate.isUpdated()).toBeFalsy();
    expect(aggregate.isParent()).toBeTruthy();
    expect(aggregate.isChild()).toBeFalsy();
    aggregate.updateParentId(newParentId);
    expect(aggregate.isUpdated()).toBeTruthy();
    expect(aggregate.isParent()).toBeFalsy();
    expect(aggregate.isChild()).toBeTruthy();
  });

  it('should change the title', () => {
    const newTitle = 'new Title';
    expect(aggregate.isUpdated()).toBeFalsy();
    expect(aggregate.toAnemic().title).toStrictEqual(title);
    aggregate.updateTitle(newTitle);
    expect(aggregate.isUpdated()).toBeTruthy();
    expect(aggregate.toAnemic().title).toStrictEqual(newTitle);
  });

  it('should change the slug', () => {
    const newSlug = 'new Slug';
    expect(aggregate.isUpdated()).toBeFalsy();
    expect(aggregate.toAnemic().slug).toStrictEqual(slug);
    aggregate.updateSlug(newSlug);
    expect(aggregate.isUpdated()).toBeTruthy();
    expect(aggregate.toAnemic().slug).toStrictEqual(newSlug);
  });

  it('should deactivate the aggregate', () => {
    expect(aggregate.isActive()).toBeTruthy();
    expect(aggregate.isUpdated()).toBeFalsy();
    aggregate.deactivate();
    expect(aggregate.isActive()).toBeFalsy();
    expect(aggregate.isUpdated()).toBeTruthy();
  });

  it('should activate the aggregate', () => {
    aggregate = new CategoryAggregate(
      id,
      parentId,
      title,
      slug,
      false,
      createdAt,
      updatedAt,
      deletedAt
    );
    expect(aggregate.isActive()).toBeFalsy();
    expect(aggregate.isUpdated()).toBeFalsy();
    aggregate.activate();
    expect(aggregate.isActive()).toBeTruthy();
    expect(aggregate.isUpdated()).toBeTruthy();
  });

  it('should delete the aggregate', () => {
    expect(aggregate.isActive()).toBeTruthy();
    expect(aggregate.isUpdated()).toBeFalsy();
    expect(aggregate.isDeleted()).toBeFalsy();
    aggregate.delete();
    expect(aggregate.isActive()).toBeFalsy();
    expect(aggregate.isUpdated()).toBeTruthy();
    expect(aggregate.isDeleted()).toBeTruthy();
  });

  it('should restore the aggregate', () => {
    aggregate = new CategoryAggregate(
      id,
      parentId,
      title,
      slug,
      active,
      createdAt,
      updatedAt,
      new Date()
    );
    expect(aggregate.isActive()).toBeFalsy();
    expect(aggregate.isUpdated()).toBeFalsy();
    expect(aggregate.isDeleted()).toBeTruthy();
    aggregate.restore();
    expect(aggregate.isActive()).toBeTruthy();
    expect(aggregate.isUpdated()).toBeTruthy();
    expect(aggregate.isDeleted()).toBeFalsy();
  });
});
